// s3Uploader.ts
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import { randomUUID } from "crypto";

// Initialize S3 client with your region
const s3Client = new S3Client({ region: process.env.AWS_REGION || "us-east-1" });

/**
 * Uploads an MP3 file to S3
 * @param fileBuffer - Buffer containing MP3 file data
 * @param originalFilename - Original filename (used for extension)
 * @param bucketName - Target S3 bucket name
 * @param customKey - Optional custom key/path for the object (without extension)
 * @returns Object containing the S3 key and full URL
 */

export async function uploadMp3ToS3(
  fileBuffer: Buffer,
  originalFilename: string,
  bucketName: string,
  customKey?: string
) {
  // Validate MP3 file
  if (!isMp3Buffer(fileBuffer)) {
    throw new Error("Invalid MP3 file");
  }

  // Generate unique filename
  const fileExtension = ".mp3";
  const key = customKey 
    ? `${customKey}${fileExtension}` 
    : `${randomUUID()}${fileExtension}`;

  // Upload parameters
  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: fileBuffer,
    ContentType: "audio/mpeg",
    ContentLength: fileBuffer.length,
  };

  try {
    // Perform upload
    const response = await s3Client.send(new PutObjectCommand(uploadParams));
    
    // Construct public URL (adjust if using private buckets)
    const url = `https://${bucketName}.s3.${process.env.AWS_REGION || "us-east-1"}.amazonaws.com/${key}`;
    
    return {
      key,
      url,
      versionId: response.VersionId,
    };
  } catch (error) {
    console.error("S3 Upload Error:", error);
    throw new Error(`Upload failed: ${(error as Error).message}`);
  }
}

/**
 * Validates if buffer contains MP3 data
 * Checks for MP3 magic bytes (ID3 header or MPEG frame sync)
 */
function isMp3Buffer(buffer: Buffer): boolean {
  // Check for ID3 tag (common in MP3 files)
  if (buffer.length >= 3 && buffer.toString("utf8", 0, 3) === "ID3") {
    return true;
  }
  
  // Check for MPEG frame sync (first 11 bits should be 1)
  if (buffer.length >= 2) {
    const firstByte = buffer[0];
    const secondByte = buffer[1];
    const syncBits = ((firstByte! << 8) | secondByte!) >> 5;
    if (syncBits === 0x7FF) return true;
  }
  
  return false;
}

/**
 * Alternative upload function using Node.js Readable Stream
 */
export async function uploadMp3StreamToS3(
  fileStream: Readable,
  filename: string,
  bucketName: string,
  customKey?: string,
) {
  const key = customKey 
    ? `${customKey}.mp3` 
    : `${randomUUID()}.mp3`;

  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: fileStream,
    ContentType: "audio/mpeg",
  };

  try {
    const response = await s3Client.send(new PutObjectCommand(uploadParams));
    const url = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    
    return {
      key,
      url,
      versionId: response.VersionId,
    };
  } catch (error) {
    console.error("S3 Stream Upload Error:", error);
    throw new Error(`Stream upload failed: ${(error as Error).message}`);
  }
}