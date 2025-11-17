import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Playist
 *
 */
export type PlayistModel = runtime.Types.Result.DefaultSelection<Prisma.$PlayistPayload>;
export type AggregatePlayist = {
    _count: PlayistCountAggregateOutputType | null;
    _avg: PlayistAvgAggregateOutputType | null;
    _sum: PlayistSumAggregateOutputType | null;
    _min: PlayistMinAggregateOutputType | null;
    _max: PlayistMaxAggregateOutputType | null;
};
export type PlayistAvgAggregateOutputType = {
    id: number | null;
    creator: number | null;
};
export type PlayistSumAggregateOutputType = {
    id: number | null;
    creator: number | null;
};
export type PlayistMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    creator: number | null;
};
export type PlayistMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    creator: number | null;
};
export type PlayistCountAggregateOutputType = {
    id: number;
    name: number;
    creator: number;
    _all: number;
};
export type PlayistAvgAggregateInputType = {
    id?: true;
    creator?: true;
};
export type PlayistSumAggregateInputType = {
    id?: true;
    creator?: true;
};
export type PlayistMinAggregateInputType = {
    id?: true;
    name?: true;
    creator?: true;
};
export type PlayistMaxAggregateInputType = {
    id?: true;
    name?: true;
    creator?: true;
};
export type PlayistCountAggregateInputType = {
    id?: true;
    name?: true;
    creator?: true;
    _all?: true;
};
export type PlayistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Playist to aggregate.
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playists to fetch.
     */
    orderBy?: Prisma.PlayistOrderByWithRelationInput | Prisma.PlayistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlayistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Playists
    **/
    _count?: true | PlayistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlayistAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlayistSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlayistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlayistMaxAggregateInputType;
};
export type GetPlayistAggregateType<T extends PlayistAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayist[P]> : Prisma.GetScalarType<T[P], AggregatePlayist[P]>;
};
export type PlayistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayistWhereInput;
    orderBy?: Prisma.PlayistOrderByWithAggregationInput | Prisma.PlayistOrderByWithAggregationInput[];
    by: Prisma.PlayistScalarFieldEnum[] | Prisma.PlayistScalarFieldEnum;
    having?: Prisma.PlayistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayistCountAggregateInputType | true;
    _avg?: PlayistAvgAggregateInputType;
    _sum?: PlayistSumAggregateInputType;
    _min?: PlayistMinAggregateInputType;
    _max?: PlayistMaxAggregateInputType;
};
export type PlayistGroupByOutputType = {
    id: number;
    name: string;
    creator: number;
    _count: PlayistCountAggregateOutputType | null;
    _avg: PlayistAvgAggregateOutputType | null;
    _sum: PlayistSumAggregateOutputType | null;
    _min: PlayistMinAggregateOutputType | null;
    _max: PlayistMaxAggregateOutputType | null;
};
type GetPlayistGroupByPayload<T extends PlayistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayistGroupByOutputType[P]>;
}>>;
export type PlayistWhereInput = {
    AND?: Prisma.PlayistWhereInput | Prisma.PlayistWhereInput[];
    OR?: Prisma.PlayistWhereInput[];
    NOT?: Prisma.PlayistWhereInput | Prisma.PlayistWhereInput[];
    id?: Prisma.IntFilter<"Playist"> | number;
    name?: Prisma.StringFilter<"Playist"> | string;
    creator?: Prisma.IntFilter<"Playist"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    songs?: Prisma.SongListRelationFilter;
};
export type PlayistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    songs?: Prisma.SongOrderByRelationAggregateInput;
};
export type PlayistWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.PlayistWhereInput | Prisma.PlayistWhereInput[];
    OR?: Prisma.PlayistWhereInput[];
    NOT?: Prisma.PlayistWhereInput | Prisma.PlayistWhereInput[];
    creator?: Prisma.IntFilter<"Playist"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    songs?: Prisma.SongListRelationFilter;
}, "id" | "name">;
export type PlayistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    _count?: Prisma.PlayistCountOrderByAggregateInput;
    _avg?: Prisma.PlayistAvgOrderByAggregateInput;
    _max?: Prisma.PlayistMaxOrderByAggregateInput;
    _min?: Prisma.PlayistMinOrderByAggregateInput;
    _sum?: Prisma.PlayistSumOrderByAggregateInput;
};
export type PlayistScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlayistScalarWhereWithAggregatesInput | Prisma.PlayistScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlayistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlayistScalarWhereWithAggregatesInput | Prisma.PlayistScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Playist"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Playist"> | string;
    creator?: Prisma.IntWithAggregatesFilter<"Playist"> | number;
};
export type PlayistCreateInput = {
    name: string;
    user: Prisma.UserCreateNestedOneWithoutPlayistInput;
    songs?: Prisma.SongCreateNestedManyWithoutPlayistInput;
};
export type PlayistUncheckedCreateInput = {
    id?: number;
    name: string;
    creator: number;
    songs?: Prisma.SongUncheckedCreateNestedManyWithoutPlayistInput;
};
export type PlayistUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayistNestedInput;
    songs?: Prisma.SongUpdateManyWithoutPlayistNestedInput;
};
export type PlayistUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
    songs?: Prisma.SongUncheckedUpdateManyWithoutPlayistNestedInput;
};
export type PlayistCreateManyInput = {
    id?: number;
    name: string;
    creator: number;
};
export type PlayistUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayistUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayistListRelationFilter = {
    every?: Prisma.PlayistWhereInput;
    some?: Prisma.PlayistWhereInput;
    none?: Prisma.PlayistWhereInput;
};
export type PlayistOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlayistNullableScalarRelationFilter = {
    is?: Prisma.PlayistWhereInput | null;
    isNot?: Prisma.PlayistWhereInput | null;
};
export type PlayistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayistAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayistSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayistCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlayistCreateWithoutUserInput, Prisma.PlayistUncheckedCreateWithoutUserInput> | Prisma.PlayistCreateWithoutUserInput[] | Prisma.PlayistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayistCreateOrConnectWithoutUserInput | Prisma.PlayistCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlayistCreateManyUserInputEnvelope;
    connect?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
};
export type PlayistUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlayistCreateWithoutUserInput, Prisma.PlayistUncheckedCreateWithoutUserInput> | Prisma.PlayistCreateWithoutUserInput[] | Prisma.PlayistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayistCreateOrConnectWithoutUserInput | Prisma.PlayistCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlayistCreateManyUserInputEnvelope;
    connect?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
};
export type PlayistUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlayistCreateWithoutUserInput, Prisma.PlayistUncheckedCreateWithoutUserInput> | Prisma.PlayistCreateWithoutUserInput[] | Prisma.PlayistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayistCreateOrConnectWithoutUserInput | Prisma.PlayistCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlayistUpsertWithWhereUniqueWithoutUserInput | Prisma.PlayistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlayistCreateManyUserInputEnvelope;
    set?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    disconnect?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    delete?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    connect?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    update?: Prisma.PlayistUpdateWithWhereUniqueWithoutUserInput | Prisma.PlayistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlayistUpdateManyWithWhereWithoutUserInput | Prisma.PlayistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlayistScalarWhereInput | Prisma.PlayistScalarWhereInput[];
};
export type PlayistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlayistCreateWithoutUserInput, Prisma.PlayistUncheckedCreateWithoutUserInput> | Prisma.PlayistCreateWithoutUserInput[] | Prisma.PlayistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayistCreateOrConnectWithoutUserInput | Prisma.PlayistCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlayistUpsertWithWhereUniqueWithoutUserInput | Prisma.PlayistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlayistCreateManyUserInputEnvelope;
    set?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    disconnect?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    delete?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    connect?: Prisma.PlayistWhereUniqueInput | Prisma.PlayistWhereUniqueInput[];
    update?: Prisma.PlayistUpdateWithWhereUniqueWithoutUserInput | Prisma.PlayistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlayistUpdateManyWithWhereWithoutUserInput | Prisma.PlayistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlayistScalarWhereInput | Prisma.PlayistScalarWhereInput[];
};
export type PlayistCreateNestedOneWithoutSongsInput = {
    create?: Prisma.XOR<Prisma.PlayistCreateWithoutSongsInput, Prisma.PlayistUncheckedCreateWithoutSongsInput>;
    connectOrCreate?: Prisma.PlayistCreateOrConnectWithoutSongsInput;
    connect?: Prisma.PlayistWhereUniqueInput;
};
export type PlayistUpdateOneWithoutSongsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayistCreateWithoutSongsInput, Prisma.PlayistUncheckedCreateWithoutSongsInput>;
    connectOrCreate?: Prisma.PlayistCreateOrConnectWithoutSongsInput;
    upsert?: Prisma.PlayistUpsertWithoutSongsInput;
    disconnect?: Prisma.PlayistWhereInput | boolean;
    delete?: Prisma.PlayistWhereInput | boolean;
    connect?: Prisma.PlayistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayistUpdateToOneWithWhereWithoutSongsInput, Prisma.PlayistUpdateWithoutSongsInput>, Prisma.PlayistUncheckedUpdateWithoutSongsInput>;
};
export type PlayistCreateWithoutUserInput = {
    name: string;
    songs?: Prisma.SongCreateNestedManyWithoutPlayistInput;
};
export type PlayistUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    songs?: Prisma.SongUncheckedCreateNestedManyWithoutPlayistInput;
};
export type PlayistCreateOrConnectWithoutUserInput = {
    where: Prisma.PlayistWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayistCreateWithoutUserInput, Prisma.PlayistUncheckedCreateWithoutUserInput>;
};
export type PlayistCreateManyUserInputEnvelope = {
    data: Prisma.PlayistCreateManyUserInput | Prisma.PlayistCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PlayistUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlayistWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayistUpdateWithoutUserInput, Prisma.PlayistUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PlayistCreateWithoutUserInput, Prisma.PlayistUncheckedCreateWithoutUserInput>;
};
export type PlayistUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlayistWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayistUpdateWithoutUserInput, Prisma.PlayistUncheckedUpdateWithoutUserInput>;
};
export type PlayistUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PlayistScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayistUpdateManyMutationInput, Prisma.PlayistUncheckedUpdateManyWithoutUserInput>;
};
export type PlayistScalarWhereInput = {
    AND?: Prisma.PlayistScalarWhereInput | Prisma.PlayistScalarWhereInput[];
    OR?: Prisma.PlayistScalarWhereInput[];
    NOT?: Prisma.PlayistScalarWhereInput | Prisma.PlayistScalarWhereInput[];
    id?: Prisma.IntFilter<"Playist"> | number;
    name?: Prisma.StringFilter<"Playist"> | string;
    creator?: Prisma.IntFilter<"Playist"> | number;
};
export type PlayistCreateWithoutSongsInput = {
    name: string;
    user: Prisma.UserCreateNestedOneWithoutPlayistInput;
};
export type PlayistUncheckedCreateWithoutSongsInput = {
    id?: number;
    name: string;
    creator: number;
};
export type PlayistCreateOrConnectWithoutSongsInput = {
    where: Prisma.PlayistWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayistCreateWithoutSongsInput, Prisma.PlayistUncheckedCreateWithoutSongsInput>;
};
export type PlayistUpsertWithoutSongsInput = {
    update: Prisma.XOR<Prisma.PlayistUpdateWithoutSongsInput, Prisma.PlayistUncheckedUpdateWithoutSongsInput>;
    create: Prisma.XOR<Prisma.PlayistCreateWithoutSongsInput, Prisma.PlayistUncheckedCreateWithoutSongsInput>;
    where?: Prisma.PlayistWhereInput;
};
export type PlayistUpdateToOneWithWhereWithoutSongsInput = {
    where?: Prisma.PlayistWhereInput;
    data: Prisma.XOR<Prisma.PlayistUpdateWithoutSongsInput, Prisma.PlayistUncheckedUpdateWithoutSongsInput>;
};
export type PlayistUpdateWithoutSongsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayistNestedInput;
};
export type PlayistUncheckedUpdateWithoutSongsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayistCreateManyUserInput = {
    id?: number;
    name: string;
};
export type PlayistUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    songs?: Prisma.SongUpdateManyWithoutPlayistNestedInput;
};
export type PlayistUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    songs?: Prisma.SongUncheckedUpdateManyWithoutPlayistNestedInput;
};
export type PlayistUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type PlayistCountOutputType
 */
export type PlayistCountOutputType = {
    songs: number;
};
export type PlayistCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    songs?: boolean | PlayistCountOutputTypeCountSongsArgs;
};
/**
 * PlayistCountOutputType without action
 */
export type PlayistCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayistCountOutputType
     */
    select?: Prisma.PlayistCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PlayistCountOutputType without action
 */
export type PlayistCountOutputTypeCountSongsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
};
export type PlayistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    creator?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    songs?: boolean | Prisma.Playist$songsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayistCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playist"]>;
export type PlayistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    creator?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playist"]>;
export type PlayistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    creator?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playist"]>;
export type PlayistSelectScalar = {
    id?: boolean;
    name?: boolean;
    creator?: boolean;
};
export type PlayistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "creator", ExtArgs["result"]["playist"]>;
export type PlayistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    songs?: boolean | Prisma.Playist$songsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayistCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlayistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PlayistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PlayistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Playist";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        songs: Prisma.$SongPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        creator: number;
    }, ExtArgs["result"]["playist"]>;
    composites: {};
};
export type PlayistGetPayload<S extends boolean | null | undefined | PlayistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlayistPayload, S>;
export type PlayistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlayistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayistCountAggregateInputType | true;
};
export interface PlayistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Playist'];
        meta: {
            name: 'Playist';
        };
    };
    /**
     * Find zero or one Playist that matches the filter.
     * @param {PlayistFindUniqueArgs} args - Arguments to find a Playist
     * @example
     * // Get one Playist
     * const playist = await prisma.playist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayistFindUniqueArgs>(args: Prisma.SelectSubset<T, PlayistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Playist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayistFindUniqueOrThrowArgs} args - Arguments to find a Playist
     * @example
     * // Get one Playist
     * const playist = await prisma.playist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlayistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Playist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistFindFirstArgs} args - Arguments to find a Playist
     * @example
     * // Get one Playist
     * const playist = await prisma.playist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayistFindFirstArgs>(args?: Prisma.SelectSubset<T, PlayistFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Playist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistFindFirstOrThrowArgs} args - Arguments to find a Playist
     * @example
     * // Get one Playist
     * const playist = await prisma.playist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlayistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Playists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playists
     * const playists = await prisma.playist.findMany()
     *
     * // Get first 10 Playists
     * const playists = await prisma.playist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playistWithIdOnly = await prisma.playist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayistFindManyArgs>(args?: Prisma.SelectSubset<T, PlayistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Playist.
     * @param {PlayistCreateArgs} args - Arguments to create a Playist.
     * @example
     * // Create one Playist
     * const Playist = await prisma.playist.create({
     *   data: {
     *     // ... data to create a Playist
     *   }
     * })
     *
     */
    create<T extends PlayistCreateArgs>(args: Prisma.SelectSubset<T, PlayistCreateArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Playists.
     * @param {PlayistCreateManyArgs} args - Arguments to create many Playists.
     * @example
     * // Create many Playists
     * const playist = await prisma.playist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayistCreateManyArgs>(args?: Prisma.SelectSubset<T, PlayistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Playists and returns the data saved in the database.
     * @param {PlayistCreateManyAndReturnArgs} args - Arguments to create many Playists.
     * @example
     * // Create many Playists
     * const playist = await prisma.playist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Playists and only return the `id`
     * const playistWithIdOnly = await prisma.playist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlayistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Playist.
     * @param {PlayistDeleteArgs} args - Arguments to delete one Playist.
     * @example
     * // Delete one Playist
     * const Playist = await prisma.playist.delete({
     *   where: {
     *     // ... filter to delete one Playist
     *   }
     * })
     *
     */
    delete<T extends PlayistDeleteArgs>(args: Prisma.SelectSubset<T, PlayistDeleteArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Playist.
     * @param {PlayistUpdateArgs} args - Arguments to update one Playist.
     * @example
     * // Update one Playist
     * const playist = await prisma.playist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayistUpdateArgs>(args: Prisma.SelectSubset<T, PlayistUpdateArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Playists.
     * @param {PlayistDeleteManyArgs} args - Arguments to filter Playists to delete.
     * @example
     * // Delete a few Playists
     * const { count } = await prisma.playist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayistDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlayistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Playists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playists
     * const playist = await prisma.playist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayistUpdateManyArgs>(args: Prisma.SelectSubset<T, PlayistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Playists and returns the data updated in the database.
     * @param {PlayistUpdateManyAndReturnArgs} args - Arguments to update many Playists.
     * @example
     * // Update many Playists
     * const playist = await prisma.playist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Playists and only return the `id`
     * const playistWithIdOnly = await prisma.playist.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlayistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Playist.
     * @param {PlayistUpsertArgs} args - Arguments to update or create a Playist.
     * @example
     * // Update or create a Playist
     * const playist = await prisma.playist.upsert({
     *   create: {
     *     // ... data to create a Playist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playist we want to update
     *   }
     * })
     */
    upsert<T extends PlayistUpsertArgs>(args: Prisma.SelectSubset<T, PlayistUpsertArgs<ExtArgs>>): Prisma.Prisma__PlayistClient<runtime.Types.Result.GetResult<Prisma.$PlayistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Playists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistCountArgs} args - Arguments to filter Playists to count.
     * @example
     * // Count the number of Playists
     * const count = await prisma.playist.count({
     *   where: {
     *     // ... the filter for the Playists we want to count
     *   }
     * })
    **/
    count<T extends PlayistCountArgs>(args?: Prisma.Subset<T, PlayistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayistCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Playist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayistAggregateArgs>(args: Prisma.Subset<T, PlayistAggregateArgs>): Prisma.PrismaPromise<GetPlayistAggregateType<T>>;
    /**
     * Group by Playist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayistGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PlayistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlayistGroupByArgs['orderBy'];
    } : {
        orderBy?: PlayistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlayistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Playist model
     */
    readonly fields: PlayistFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Playist.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlayistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    songs<T extends Prisma.Playist$songsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Playist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Playist model
 */
export interface PlayistFieldRefs {
    readonly id: Prisma.FieldRef<"Playist", 'Int'>;
    readonly name: Prisma.FieldRef<"Playist", 'String'>;
    readonly creator: Prisma.FieldRef<"Playist", 'Int'>;
}
/**
 * Playist findUnique
 */
export type PlayistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Playist to fetch.
     */
    where: Prisma.PlayistWhereUniqueInput;
};
/**
 * Playist findUniqueOrThrow
 */
export type PlayistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Playist to fetch.
     */
    where: Prisma.PlayistWhereUniqueInput;
};
/**
 * Playist findFirst
 */
export type PlayistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Playist to fetch.
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playists to fetch.
     */
    orderBy?: Prisma.PlayistOrderByWithRelationInput | Prisma.PlayistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Playists.
     */
    cursor?: Prisma.PlayistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Playists.
     */
    distinct?: Prisma.PlayistScalarFieldEnum | Prisma.PlayistScalarFieldEnum[];
};
/**
 * Playist findFirstOrThrow
 */
export type PlayistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Playist to fetch.
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playists to fetch.
     */
    orderBy?: Prisma.PlayistOrderByWithRelationInput | Prisma.PlayistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Playists.
     */
    cursor?: Prisma.PlayistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Playists.
     */
    distinct?: Prisma.PlayistScalarFieldEnum | Prisma.PlayistScalarFieldEnum[];
};
/**
 * Playist findMany
 */
export type PlayistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Playists to fetch.
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Playists to fetch.
     */
    orderBy?: Prisma.PlayistOrderByWithRelationInput | Prisma.PlayistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Playists.
     */
    cursor?: Prisma.PlayistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Playists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Playists.
     */
    skip?: number;
    distinct?: Prisma.PlayistScalarFieldEnum | Prisma.PlayistScalarFieldEnum[];
};
/**
 * Playist create
 */
export type PlayistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Playist.
     */
    data: Prisma.XOR<Prisma.PlayistCreateInput, Prisma.PlayistUncheckedCreateInput>;
};
/**
 * Playist createMany
 */
export type PlayistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playists.
     */
    data: Prisma.PlayistCreateManyInput | Prisma.PlayistCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Playist createManyAndReturn
 */
export type PlayistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playist
     */
    select?: Prisma.PlayistSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Playist
     */
    omit?: Prisma.PlayistOmit<ExtArgs> | null;
    /**
     * The data used to create many Playists.
     */
    data: Prisma.PlayistCreateManyInput | Prisma.PlayistCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayistIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Playist update
 */
export type PlayistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Playist.
     */
    data: Prisma.XOR<Prisma.PlayistUpdateInput, Prisma.PlayistUncheckedUpdateInput>;
    /**
     * Choose, which Playist to update.
     */
    where: Prisma.PlayistWhereUniqueInput;
};
/**
 * Playist updateMany
 */
export type PlayistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Playists.
     */
    data: Prisma.XOR<Prisma.PlayistUpdateManyMutationInput, Prisma.PlayistUncheckedUpdateManyInput>;
    /**
     * Filter which Playists to update
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * Limit how many Playists to update.
     */
    limit?: number;
};
/**
 * Playist updateManyAndReturn
 */
export type PlayistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playist
     */
    select?: Prisma.PlayistSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Playist
     */
    omit?: Prisma.PlayistOmit<ExtArgs> | null;
    /**
     * The data used to update Playists.
     */
    data: Prisma.XOR<Prisma.PlayistUpdateManyMutationInput, Prisma.PlayistUncheckedUpdateManyInput>;
    /**
     * Filter which Playists to update
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * Limit how many Playists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Playist upsert
 */
export type PlayistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Playist to update in case it exists.
     */
    where: Prisma.PlayistWhereUniqueInput;
    /**
     * In case the Playist found by the `where` argument doesn't exist, create a new Playist with this data.
     */
    create: Prisma.XOR<Prisma.PlayistCreateInput, Prisma.PlayistUncheckedCreateInput>;
    /**
     * In case the Playist was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlayistUpdateInput, Prisma.PlayistUncheckedUpdateInput>;
};
/**
 * Playist delete
 */
export type PlayistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Playist to delete.
     */
    where: Prisma.PlayistWhereUniqueInput;
};
/**
 * Playist deleteMany
 */
export type PlayistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Playists to delete
     */
    where?: Prisma.PlayistWhereInput;
    /**
     * Limit how many Playists to delete.
     */
    limit?: number;
};
/**
 * Playist.songs
 */
export type Playist$songsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
/**
 * Playist without action
 */
export type PlayistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Playist.d.ts.map