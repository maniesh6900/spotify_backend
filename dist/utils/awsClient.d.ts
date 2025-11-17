import { Readable } from "stream";
/**
 * Uploads an MP3 file to S3
 * @param fileBuffer - Buffer containing MP3 file data
 * @param originalFilename - Original filename (used for extension)
 * @param bucketName - Target S3 bucket name
 * @param customKey - Optional custom key/path for the object (without extension)
 * @returns Object containing the S3 key and full URL
 */
export declare function uploadMp3ToS3(fileBuffer: Buffer, originalFilename: string, bucketName: string, customKey?: string): Promise<{
    key: string;
    url: string;
    versionId: string | undefined;
}>;
/**
 * Alternative upload function using Node.js Readable Stream
 */
export declare function uploadMp3StreamToS3(fileStream: Readable, filename: string, bucketName: string, customKey?: string): Promise<{
    key: string;
    url: string;
    versionId: string | undefined;
}>;
//# sourceMappingURL=awsClient.d.ts.map