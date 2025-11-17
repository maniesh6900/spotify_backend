import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Song
 *
 */
export type SongModel = runtime.Types.Result.DefaultSelection<Prisma.$SongPayload>;
export type AggregateSong = {
    _count: SongCountAggregateOutputType | null;
    _avg: SongAvgAggregateOutputType | null;
    _sum: SongSumAggregateOutputType | null;
    _min: SongMinAggregateOutputType | null;
    _max: SongMaxAggregateOutputType | null;
};
export type SongAvgAggregateOutputType = {
    id: number | null;
    creator: number | null;
    playistId: number | null;
};
export type SongSumAggregateOutputType = {
    id: number | null;
    creator: number | null;
    playistId: number | null;
};
export type SongMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    album: string | null;
    creator: number | null;
    songPath: string | null;
    playistId: number | null;
};
export type SongMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    album: string | null;
    creator: number | null;
    songPath: string | null;
    playistId: number | null;
};
export type SongCountAggregateOutputType = {
    id: number;
    name: number;
    album: number;
    creator: number;
    songPath: number;
    playistId: number;
    _all: number;
};
export type SongAvgAggregateInputType = {
    id?: true;
    creator?: true;
    playistId?: true;
};
export type SongSumAggregateInputType = {
    id?: true;
    creator?: true;
    playistId?: true;
};
export type SongMinAggregateInputType = {
    id?: true;
    name?: true;
    album?: true;
    creator?: true;
    songPath?: true;
    playistId?: true;
};
export type SongMaxAggregateInputType = {
    id?: true;
    name?: true;
    album?: true;
    creator?: true;
    songPath?: true;
    playistId?: true;
};
export type SongCountAggregateInputType = {
    id?: true;
    name?: true;
    album?: true;
    creator?: true;
    songPath?: true;
    playistId?: true;
    _all?: true;
};
export type SongAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: Prisma.SongWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Songs to fetch.
     */
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SongWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Songs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType;
};
export type GetSongAggregateType<T extends SongAggregateArgs> = {
    [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSong[P]> : Prisma.GetScalarType<T[P], AggregateSong[P]>;
};
export type SongGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithAggregationInput | Prisma.SongOrderByWithAggregationInput[];
    by: Prisma.SongScalarFieldEnum[] | Prisma.SongScalarFieldEnum;
    having?: Prisma.SongScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SongCountAggregateInputType | true;
    _avg?: SongAvgAggregateInputType;
    _sum?: SongSumAggregateInputType;
    _min?: SongMinAggregateInputType;
    _max?: SongMaxAggregateInputType;
};
export type SongGroupByOutputType = {
    id: number;
    name: string;
    album: string | null;
    creator: number;
    songPath: string;
    playistId: number | null;
    _count: SongCountAggregateOutputType | null;
    _avg: SongAvgAggregateOutputType | null;
    _sum: SongSumAggregateOutputType | null;
    _min: SongMinAggregateOutputType | null;
    _max: SongMaxAggregateOutputType | null;
};
type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SongGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SongGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SongGroupByOutputType[P]>;
}>>;
export type SongWhereInput = {
    AND?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    OR?: Prisma.SongWhereInput[];
    NOT?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    id?: Prisma.IntFilter<"Song"> | number;
    name?: Prisma.StringFilter<"Song"> | string;
    album?: Prisma.StringNullableFilter<"Song"> | string | null;
    creator?: Prisma.IntFilter<"Song"> | number;
    songPath?: Prisma.StringFilter<"Song"> | string;
    playistId?: Prisma.IntNullableFilter<"Song"> | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Playist?: Prisma.XOR<Prisma.PlayistNullableScalarRelationFilter, Prisma.PlayistWhereInput> | null;
};
export type SongOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    album?: Prisma.SortOrderInput | Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    songPath?: Prisma.SortOrder;
    playistId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    Playist?: Prisma.PlayistOrderByWithRelationInput;
};
export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    OR?: Prisma.SongWhereInput[];
    NOT?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    album?: Prisma.StringNullableFilter<"Song"> | string | null;
    creator?: Prisma.IntFilter<"Song"> | number;
    songPath?: Prisma.StringFilter<"Song"> | string;
    playistId?: Prisma.IntNullableFilter<"Song"> | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Playist?: Prisma.XOR<Prisma.PlayistNullableScalarRelationFilter, Prisma.PlayistWhereInput> | null;
}, "id" | "name">;
export type SongOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    album?: Prisma.SortOrderInput | Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    songPath?: Prisma.SortOrder;
    playistId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SongCountOrderByAggregateInput;
    _avg?: Prisma.SongAvgOrderByAggregateInput;
    _max?: Prisma.SongMaxOrderByAggregateInput;
    _min?: Prisma.SongMinOrderByAggregateInput;
    _sum?: Prisma.SongSumOrderByAggregateInput;
};
export type SongScalarWhereWithAggregatesInput = {
    AND?: Prisma.SongScalarWhereWithAggregatesInput | Prisma.SongScalarWhereWithAggregatesInput[];
    OR?: Prisma.SongScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SongScalarWhereWithAggregatesInput | Prisma.SongScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Song"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    album?: Prisma.StringNullableWithAggregatesFilter<"Song"> | string | null;
    creator?: Prisma.IntWithAggregatesFilter<"Song"> | number;
    songPath?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    playistId?: Prisma.IntNullableWithAggregatesFilter<"Song"> | number | null;
};
export type SongCreateInput = {
    name: string;
    album?: string | null;
    songPath: string;
    user: Prisma.UserCreateNestedOneWithoutSongInput;
    Playist?: Prisma.PlayistCreateNestedOneWithoutSongsInput;
};
export type SongUncheckedCreateInput = {
    id?: number;
    name: string;
    album?: string | null;
    creator: number;
    songPath: string;
    playistId?: number | null;
};
export type SongUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSongNestedInput;
    Playist?: Prisma.PlayistUpdateOneWithoutSongsNestedInput;
};
export type SongUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    playistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SongCreateManyInput = {
    id?: number;
    name: string;
    album?: string | null;
    creator: number;
    songPath: string;
    playistId?: number | null;
};
export type SongUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SongUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    playistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SongListRelationFilter = {
    every?: Prisma.SongWhereInput;
    some?: Prisma.SongWhereInput;
    none?: Prisma.SongWhereInput;
};
export type SongOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SongCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    songPath?: Prisma.SortOrder;
    playistId?: Prisma.SortOrder;
};
export type SongAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    playistId?: Prisma.SortOrder;
};
export type SongMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    songPath?: Prisma.SortOrder;
    playistId?: Prisma.SortOrder;
};
export type SongMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    songPath?: Prisma.SortOrder;
    playistId?: Prisma.SortOrder;
};
export type SongSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    playistId?: Prisma.SortOrder;
};
export type SongCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutUserInput, Prisma.SongUncheckedCreateWithoutUserInput> | Prisma.SongCreateWithoutUserInput[] | Prisma.SongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutUserInput | Prisma.SongCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SongCreateManyUserInputEnvelope;
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
};
export type SongUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutUserInput, Prisma.SongUncheckedCreateWithoutUserInput> | Prisma.SongCreateWithoutUserInput[] | Prisma.SongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutUserInput | Prisma.SongCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SongCreateManyUserInputEnvelope;
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
};
export type SongUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutUserInput, Prisma.SongUncheckedCreateWithoutUserInput> | Prisma.SongCreateWithoutUserInput[] | Prisma.SongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutUserInput | Prisma.SongCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SongUpsertWithWhereUniqueWithoutUserInput | Prisma.SongUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SongCreateManyUserInputEnvelope;
    set?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    disconnect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    delete?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    update?: Prisma.SongUpdateWithWhereUniqueWithoutUserInput | Prisma.SongUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SongUpdateManyWithWhereWithoutUserInput | Prisma.SongUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SongScalarWhereInput | Prisma.SongScalarWhereInput[];
};
export type SongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutUserInput, Prisma.SongUncheckedCreateWithoutUserInput> | Prisma.SongCreateWithoutUserInput[] | Prisma.SongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutUserInput | Prisma.SongCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SongUpsertWithWhereUniqueWithoutUserInput | Prisma.SongUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SongCreateManyUserInputEnvelope;
    set?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    disconnect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    delete?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    update?: Prisma.SongUpdateWithWhereUniqueWithoutUserInput | Prisma.SongUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SongUpdateManyWithWhereWithoutUserInput | Prisma.SongUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SongScalarWhereInput | Prisma.SongScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SongCreateNestedManyWithoutPlayistInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPlayistInput, Prisma.SongUncheckedCreateWithoutPlayistInput> | Prisma.SongCreateWithoutPlayistInput[] | Prisma.SongUncheckedCreateWithoutPlayistInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPlayistInput | Prisma.SongCreateOrConnectWithoutPlayistInput[];
    createMany?: Prisma.SongCreateManyPlayistInputEnvelope;
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
};
export type SongUncheckedCreateNestedManyWithoutPlayistInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPlayistInput, Prisma.SongUncheckedCreateWithoutPlayistInput> | Prisma.SongCreateWithoutPlayistInput[] | Prisma.SongUncheckedCreateWithoutPlayistInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPlayistInput | Prisma.SongCreateOrConnectWithoutPlayistInput[];
    createMany?: Prisma.SongCreateManyPlayistInputEnvelope;
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
};
export type SongUpdateManyWithoutPlayistNestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPlayistInput, Prisma.SongUncheckedCreateWithoutPlayistInput> | Prisma.SongCreateWithoutPlayistInput[] | Prisma.SongUncheckedCreateWithoutPlayistInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPlayistInput | Prisma.SongCreateOrConnectWithoutPlayistInput[];
    upsert?: Prisma.SongUpsertWithWhereUniqueWithoutPlayistInput | Prisma.SongUpsertWithWhereUniqueWithoutPlayistInput[];
    createMany?: Prisma.SongCreateManyPlayistInputEnvelope;
    set?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    disconnect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    delete?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    update?: Prisma.SongUpdateWithWhereUniqueWithoutPlayistInput | Prisma.SongUpdateWithWhereUniqueWithoutPlayistInput[];
    updateMany?: Prisma.SongUpdateManyWithWhereWithoutPlayistInput | Prisma.SongUpdateManyWithWhereWithoutPlayistInput[];
    deleteMany?: Prisma.SongScalarWhereInput | Prisma.SongScalarWhereInput[];
};
export type SongUncheckedUpdateManyWithoutPlayistNestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPlayistInput, Prisma.SongUncheckedCreateWithoutPlayistInput> | Prisma.SongCreateWithoutPlayistInput[] | Prisma.SongUncheckedCreateWithoutPlayistInput[];
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPlayistInput | Prisma.SongCreateOrConnectWithoutPlayistInput[];
    upsert?: Prisma.SongUpsertWithWhereUniqueWithoutPlayistInput | Prisma.SongUpsertWithWhereUniqueWithoutPlayistInput[];
    createMany?: Prisma.SongCreateManyPlayistInputEnvelope;
    set?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    disconnect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    delete?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    connect?: Prisma.SongWhereUniqueInput | Prisma.SongWhereUniqueInput[];
    update?: Prisma.SongUpdateWithWhereUniqueWithoutPlayistInput | Prisma.SongUpdateWithWhereUniqueWithoutPlayistInput[];
    updateMany?: Prisma.SongUpdateManyWithWhereWithoutPlayistInput | Prisma.SongUpdateManyWithWhereWithoutPlayistInput[];
    deleteMany?: Prisma.SongScalarWhereInput | Prisma.SongScalarWhereInput[];
};
export type SongCreateWithoutUserInput = {
    name: string;
    album?: string | null;
    songPath: string;
    Playist?: Prisma.PlayistCreateNestedOneWithoutSongsInput;
};
export type SongUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    album?: string | null;
    songPath: string;
    playistId?: number | null;
};
export type SongCreateOrConnectWithoutUserInput = {
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateWithoutUserInput, Prisma.SongUncheckedCreateWithoutUserInput>;
};
export type SongCreateManyUserInputEnvelope = {
    data: Prisma.SongCreateManyUserInput | Prisma.SongCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SongUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SongWhereUniqueInput;
    update: Prisma.XOR<Prisma.SongUpdateWithoutUserInput, Prisma.SongUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SongCreateWithoutUserInput, Prisma.SongUncheckedCreateWithoutUserInput>;
};
export type SongUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SongWhereUniqueInput;
    data: Prisma.XOR<Prisma.SongUpdateWithoutUserInput, Prisma.SongUncheckedUpdateWithoutUserInput>;
};
export type SongUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SongScalarWhereInput;
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyWithoutUserInput>;
};
export type SongScalarWhereInput = {
    AND?: Prisma.SongScalarWhereInput | Prisma.SongScalarWhereInput[];
    OR?: Prisma.SongScalarWhereInput[];
    NOT?: Prisma.SongScalarWhereInput | Prisma.SongScalarWhereInput[];
    id?: Prisma.IntFilter<"Song"> | number;
    name?: Prisma.StringFilter<"Song"> | string;
    album?: Prisma.StringNullableFilter<"Song"> | string | null;
    creator?: Prisma.IntFilter<"Song"> | number;
    songPath?: Prisma.StringFilter<"Song"> | string;
    playistId?: Prisma.IntNullableFilter<"Song"> | number | null;
};
export type SongCreateWithoutPlayistInput = {
    name: string;
    album?: string | null;
    songPath: string;
    user: Prisma.UserCreateNestedOneWithoutSongInput;
};
export type SongUncheckedCreateWithoutPlayistInput = {
    id?: number;
    name: string;
    album?: string | null;
    creator: number;
    songPath: string;
};
export type SongCreateOrConnectWithoutPlayistInput = {
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateWithoutPlayistInput, Prisma.SongUncheckedCreateWithoutPlayistInput>;
};
export type SongCreateManyPlayistInputEnvelope = {
    data: Prisma.SongCreateManyPlayistInput | Prisma.SongCreateManyPlayistInput[];
    skipDuplicates?: boolean;
};
export type SongUpsertWithWhereUniqueWithoutPlayistInput = {
    where: Prisma.SongWhereUniqueInput;
    update: Prisma.XOR<Prisma.SongUpdateWithoutPlayistInput, Prisma.SongUncheckedUpdateWithoutPlayistInput>;
    create: Prisma.XOR<Prisma.SongCreateWithoutPlayistInput, Prisma.SongUncheckedCreateWithoutPlayistInput>;
};
export type SongUpdateWithWhereUniqueWithoutPlayistInput = {
    where: Prisma.SongWhereUniqueInput;
    data: Prisma.XOR<Prisma.SongUpdateWithoutPlayistInput, Prisma.SongUncheckedUpdateWithoutPlayistInput>;
};
export type SongUpdateManyWithWhereWithoutPlayistInput = {
    where: Prisma.SongScalarWhereInput;
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyWithoutPlayistInput>;
};
export type SongCreateManyUserInput = {
    id?: number;
    name: string;
    album?: string | null;
    songPath: string;
    playistId?: number | null;
};
export type SongUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    Playist?: Prisma.PlayistUpdateOneWithoutSongsNestedInput;
};
export type SongUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    playistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SongUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    playistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SongCreateManyPlayistInput = {
    id?: number;
    name: string;
    album?: string | null;
    creator: number;
    songPath: string;
};
export type SongUpdateWithoutPlayistInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSongNestedInput;
};
export type SongUncheckedUpdateWithoutPlayistInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SongUncheckedUpdateManyWithoutPlayistInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
    songPath?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SongSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    album?: boolean;
    creator?: boolean;
    songPath?: boolean;
    playistId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Playist?: boolean | Prisma.Song$PlayistArgs<ExtArgs>;
}, ExtArgs["result"]["song"]>;
export type SongSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    album?: boolean;
    creator?: boolean;
    songPath?: boolean;
    playistId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Playist?: boolean | Prisma.Song$PlayistArgs<ExtArgs>;
}, ExtArgs["result"]["song"]>;
export type SongSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    album?: boolean;
    creator?: boolean;
    songPath?: boolean;
    playistId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Playist?: boolean | Prisma.Song$PlayistArgs<ExtArgs>;
}, ExtArgs["result"]["song"]>;
export type SongSelectScalar = {
    id?: boolean;
    name?: boolean;
    album?: boolean;
    creator?: boolean;
    songPath?: boolean;
    playistId?: boolean;
};
export type SongOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "album" | "creator" | "songPath" | "playistId", ExtArgs["result"]["song"]>;
export type SongInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Playist?: boolean | Prisma.Song$PlayistArgs<ExtArgs>;
};
export type SongIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Playist?: boolean | Prisma.Song$PlayistArgs<ExtArgs>;
};
export type SongIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Playist?: boolean | Prisma.Song$PlayistArgs<ExtArgs>;
};
export type $SongPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Song";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        Playist: Prisma.$PlayistPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        album: string | null;
        creator: number;
        songPath: string;
        playistId: number | null;
    }, ExtArgs["result"]["song"]>;
    composites: {};
};
export type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SongPayload, S>;
export type SongCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SongCountAggregateInputType | true;
};
export interface SongDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Song'];
        meta: {
            name: 'Song';
        };
    };
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: Prisma.SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: Prisma.SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     *
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SongFindManyArgs>(args?: Prisma.SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     *
     */
    create<T extends SongCreateArgs>(args: Prisma.SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SongCreateManyArgs>(args?: Prisma.SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     *
     */
    delete<T extends SongDeleteArgs>(args: Prisma.SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SongUpdateArgs>(args: Prisma.SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: Prisma.SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SongUpdateManyArgs>(args: Prisma.SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: Prisma.SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(args?: Prisma.Subset<T, SongCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SongCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Prisma.Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>;
    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SongGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SongGroupByArgs['orderBy'];
    } : {
        orderBy?: SongGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Song model
     */
    readonly fields: SongFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Song.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SongClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Playist<T extends Prisma.Song$PlayistArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Song$PlayistArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Song model
 */
export interface SongFieldRefs {
    readonly id: Prisma.FieldRef<"Song", 'Int'>;
    readonly name: Prisma.FieldRef<"Song", 'String'>;
    readonly album: Prisma.FieldRef<"Song", 'String'>;
    readonly creator: Prisma.FieldRef<"Song", 'Int'>;
    readonly songPath: Prisma.FieldRef<"Song", 'String'>;
    readonly playistId: Prisma.FieldRef<"Song", 'Int'>;
}
/**
 * Song findUnique
 */
export type SongFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * Filter, which Song to fetch.
     */
    where: Prisma.SongWhereUniqueInput;
};
/**
 * Song findUniqueOrThrow
 */
export type SongFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * Filter, which Song to fetch.
     */
    where: Prisma.SongWhereUniqueInput;
};
/**
 * Song findFirst
 */
export type SongFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * Filter, which Song to fetch.
     */
    where?: Prisma.SongWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Songs to fetch.
     */
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Songs.
     */
    cursor?: Prisma.SongWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Songs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Songs.
     */
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
/**
 * Song findFirstOrThrow
 */
export type SongFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * Filter, which Song to fetch.
     */
    where?: Prisma.SongWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Songs to fetch.
     */
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Songs.
     */
    cursor?: Prisma.SongWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Songs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Songs.
     */
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
/**
 * Song findMany
 */
export type SongFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * Filter, which Songs to fetch.
     */
    where?: Prisma.SongWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Songs to fetch.
     */
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Songs.
     */
    cursor?: Prisma.SongWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Songs.
     */
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
/**
 * Song create
 */
export type SongCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * The data needed to create a Song.
     */
    data: Prisma.XOR<Prisma.SongCreateInput, Prisma.SongUncheckedCreateInput>;
};
/**
 * Song createMany
 */
export type SongCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: Prisma.SongCreateManyInput | Prisma.SongCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Song createManyAndReturn
 */
export type SongCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * The data used to create many Songs.
     */
    data: Prisma.SongCreateManyInput | Prisma.SongCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Song update
 */
export type SongUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * The data needed to update a Song.
     */
    data: Prisma.XOR<Prisma.SongUpdateInput, Prisma.SongUncheckedUpdateInput>;
    /**
     * Choose, which Song to update.
     */
    where: Prisma.SongWhereUniqueInput;
};
/**
 * Song updateMany
 */
export type SongUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyInput>;
    /**
     * Filter which Songs to update
     */
    where?: Prisma.SongWhereInput;
    /**
     * Limit how many Songs to update.
     */
    limit?: number;
};
/**
 * Song updateManyAndReturn
 */
export type SongUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * The data used to update Songs.
     */
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyInput>;
    /**
     * Filter which Songs to update
     */
    where?: Prisma.SongWhereInput;
    /**
     * Limit how many Songs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Song upsert
 */
export type SongUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: Prisma.SongWhereUniqueInput;
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: Prisma.XOR<Prisma.SongCreateInput, Prisma.SongUncheckedCreateInput>;
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SongUpdateInput, Prisma.SongUncheckedUpdateInput>;
};
/**
 * Song delete
 */
export type SongDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
    /**
     * Filter which Song to delete.
     */
    where: Prisma.SongWhereUniqueInput;
};
/**
 * Song deleteMany
 */
export type SongDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: Prisma.SongWhereInput;
    /**
     * Limit how many Songs to delete.
     */
    limit?: number;
};
/**
 * Song.Playist
 */
export type Song$PlayistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playist
     */
    select?: Prisma.PlayistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Playist
     */
    omit?: Prisma.PlayistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayistInclude<ExtArgs> | null;
    where?: Prisma.PlayistWhereInput;
};
/**
 * Song without action
 */
export type SongDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: Prisma.SongSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Song
     */
    omit?: Prisma.SongOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SongInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Song.d.ts.map