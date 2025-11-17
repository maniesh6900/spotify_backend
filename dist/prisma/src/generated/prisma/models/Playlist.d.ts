import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PlayList
 *
 */
export type PlayListModel = runtime.Types.Result.DefaultSelection<Prisma.$PlayListPayload>;
export type AggregatePlayList = {
    _count: PlayListCountAggregateOutputType | null;
    _avg: PlayListAvgAggregateOutputType | null;
    _sum: PlayListSumAggregateOutputType | null;
    _min: PlayListMinAggregateOutputType | null;
    _max: PlayListMaxAggregateOutputType | null;
};
export type PlayListAvgAggregateOutputType = {
    id: number | null;
    creator: number | null;
};
export type PlayListSumAggregateOutputType = {
    id: number | null;
    creator: number | null;
};
export type PlayListMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    creator: number | null;
};
export type PlayListMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    creator: number | null;
};
export type PlayListCountAggregateOutputType = {
    id: number;
    name: number;
    creator: number;
    _all: number;
};
export type PlayListAvgAggregateInputType = {
    id?: true;
    creator?: true;
};
export type PlayListSumAggregateInputType = {
    id?: true;
    creator?: true;
};
export type PlayListMinAggregateInputType = {
    id?: true;
    name?: true;
    creator?: true;
};
export type PlayListMaxAggregateInputType = {
    id?: true;
    name?: true;
    creator?: true;
};
export type PlayListCountAggregateInputType = {
    id?: true;
    name?: true;
    creator?: true;
    _all?: true;
};
export type PlayListAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayList to aggregate.
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: Prisma.PlayListOrderByWithRelationInput | Prisma.PlayListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlayListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PlayLists
    **/
    _count?: true | PlayListCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlayListAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlayListSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlayListMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlayListMaxAggregateInputType;
};
export type GetPlayListAggregateType<T extends PlayListAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayList]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayList[P]> : Prisma.GetScalarType<T[P], AggregatePlayList[P]>;
};
export type PlayListGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayListWhereInput;
    orderBy?: Prisma.PlayListOrderByWithAggregationInput | Prisma.PlayListOrderByWithAggregationInput[];
    by: Prisma.PlayListScalarFieldEnum[] | Prisma.PlayListScalarFieldEnum;
    having?: Prisma.PlayListScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayListCountAggregateInputType | true;
    _avg?: PlayListAvgAggregateInputType;
    _sum?: PlayListSumAggregateInputType;
    _min?: PlayListMinAggregateInputType;
    _max?: PlayListMaxAggregateInputType;
};
export type PlayListGroupByOutputType = {
    id: number;
    name: string;
    creator: number;
    _count: PlayListCountAggregateOutputType | null;
    _avg: PlayListAvgAggregateOutputType | null;
    _sum: PlayListSumAggregateOutputType | null;
    _min: PlayListMinAggregateOutputType | null;
    _max: PlayListMaxAggregateOutputType | null;
};
type GetPlayListGroupByPayload<T extends PlayListGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayListGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayListGroupByOutputType[P]>;
}>>;
export type PlayListWhereInput = {
    AND?: Prisma.PlayListWhereInput | Prisma.PlayListWhereInput[];
    OR?: Prisma.PlayListWhereInput[];
    NOT?: Prisma.PlayListWhereInput | Prisma.PlayListWhereInput[];
    id?: Prisma.IntFilter<"PlayList"> | number;
    name?: Prisma.StringFilter<"PlayList"> | string;
    creator?: Prisma.IntFilter<"PlayList"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    songs?: Prisma.SongListRelationFilter;
};
export type PlayListOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    songs?: Prisma.SongOrderByRelationAggregateInput;
};
export type PlayListWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.PlayListWhereInput | Prisma.PlayListWhereInput[];
    OR?: Prisma.PlayListWhereInput[];
    NOT?: Prisma.PlayListWhereInput | Prisma.PlayListWhereInput[];
    creator?: Prisma.IntFilter<"PlayList"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    songs?: Prisma.SongListRelationFilter;
}, "id" | "name">;
export type PlayListOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
    _count?: Prisma.PlayListCountOrderByAggregateInput;
    _avg?: Prisma.PlayListAvgOrderByAggregateInput;
    _max?: Prisma.PlayListMaxOrderByAggregateInput;
    _min?: Prisma.PlayListMinOrderByAggregateInput;
    _sum?: Prisma.PlayListSumOrderByAggregateInput;
};
export type PlayListScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlayListScalarWhereWithAggregatesInput | Prisma.PlayListScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlayListScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlayListScalarWhereWithAggregatesInput | Prisma.PlayListScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PlayList"> | number;
    name?: Prisma.StringWithAggregatesFilter<"PlayList"> | string;
    creator?: Prisma.IntWithAggregatesFilter<"PlayList"> | number;
};
export type PlayListCreateInput = {
    name: string;
    user: Prisma.UserCreateNestedOneWithoutPlayistInput;
    songs?: Prisma.SongCreateNestedManyWithoutPlayistInput;
};
export type PlayListUncheckedCreateInput = {
    id?: number;
    name: string;
    creator: number;
    songs?: Prisma.SongUncheckedCreateNestedManyWithoutPlayistInput;
};
export type PlayListUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayistNestedInput;
    songs?: Prisma.SongUpdateManyWithoutPlayistNestedInput;
};
export type PlayListUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
    songs?: Prisma.SongUncheckedUpdateManyWithoutPlayistNestedInput;
};
export type PlayListCreateManyInput = {
    id?: number;
    name: string;
    creator: number;
};
export type PlayListUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayListUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayListListRelationFilter = {
    every?: Prisma.PlayListWhereInput;
    some?: Prisma.PlayListWhereInput;
    none?: Prisma.PlayListWhereInput;
};
export type PlayListOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlayListNullableScalarRelationFilter = {
    is?: Prisma.PlayListWhereInput | null;
    isNot?: Prisma.PlayListWhereInput | null;
};
export type PlayListCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayListAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayListMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayListMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayListSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creator?: Prisma.SortOrder;
};
export type PlayListCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlayListCreateWithoutUserInput, Prisma.PlayListUncheckedCreateWithoutUserInput> | Prisma.PlayListCreateWithoutUserInput[] | Prisma.PlayListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayListCreateOrConnectWithoutUserInput | Prisma.PlayListCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlayListCreateManyUserInputEnvelope;
    connect?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
};
export type PlayListUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlayListCreateWithoutUserInput, Prisma.PlayListUncheckedCreateWithoutUserInput> | Prisma.PlayListCreateWithoutUserInput[] | Prisma.PlayListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayListCreateOrConnectWithoutUserInput | Prisma.PlayListCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlayListCreateManyUserInputEnvelope;
    connect?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
};
export type PlayListUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlayListCreateWithoutUserInput, Prisma.PlayListUncheckedCreateWithoutUserInput> | Prisma.PlayListCreateWithoutUserInput[] | Prisma.PlayListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayListCreateOrConnectWithoutUserInput | Prisma.PlayListCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlayListUpsertWithWhereUniqueWithoutUserInput | Prisma.PlayListUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlayListCreateManyUserInputEnvelope;
    set?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    disconnect?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    delete?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    connect?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    update?: Prisma.PlayListUpdateWithWhereUniqueWithoutUserInput | Prisma.PlayListUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlayListUpdateManyWithWhereWithoutUserInput | Prisma.PlayListUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlayListScalarWhereInput | Prisma.PlayListScalarWhereInput[];
};
export type PlayListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlayListCreateWithoutUserInput, Prisma.PlayListUncheckedCreateWithoutUserInput> | Prisma.PlayListCreateWithoutUserInput[] | Prisma.PlayListUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlayListCreateOrConnectWithoutUserInput | Prisma.PlayListCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlayListUpsertWithWhereUniqueWithoutUserInput | Prisma.PlayListUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlayListCreateManyUserInputEnvelope;
    set?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    disconnect?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    delete?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    connect?: Prisma.PlayListWhereUniqueInput | Prisma.PlayListWhereUniqueInput[];
    update?: Prisma.PlayListUpdateWithWhereUniqueWithoutUserInput | Prisma.PlayListUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlayListUpdateManyWithWhereWithoutUserInput | Prisma.PlayListUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlayListScalarWhereInput | Prisma.PlayListScalarWhereInput[];
};
export type PlayListCreateNestedOneWithoutSongsInput = {
    create?: Prisma.XOR<Prisma.PlayListCreateWithoutSongsInput, Prisma.PlayListUncheckedCreateWithoutSongsInput>;
    connectOrCreate?: Prisma.PlayListCreateOrConnectWithoutSongsInput;
    connect?: Prisma.PlayListWhereUniqueInput;
};
export type PlayListUpdateOneWithoutSongsNestedInput = {
    create?: Prisma.XOR<Prisma.PlayListCreateWithoutSongsInput, Prisma.PlayListUncheckedCreateWithoutSongsInput>;
    connectOrCreate?: Prisma.PlayListCreateOrConnectWithoutSongsInput;
    upsert?: Prisma.PlayListUpsertWithoutSongsInput;
    disconnect?: Prisma.PlayListWhereInput | boolean;
    delete?: Prisma.PlayListWhereInput | boolean;
    connect?: Prisma.PlayListWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlayListUpdateToOneWithWhereWithoutSongsInput, Prisma.PlayListUpdateWithoutSongsInput>, Prisma.PlayListUncheckedUpdateWithoutSongsInput>;
};
export type PlayListCreateWithoutUserInput = {
    name: string;
    songs?: Prisma.SongCreateNestedManyWithoutPlayistInput;
};
export type PlayListUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    songs?: Prisma.SongUncheckedCreateNestedManyWithoutPlayistInput;
};
export type PlayListCreateOrConnectWithoutUserInput = {
    where: Prisma.PlayListWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayListCreateWithoutUserInput, Prisma.PlayListUncheckedCreateWithoutUserInput>;
};
export type PlayListCreateManyUserInputEnvelope = {
    data: Prisma.PlayListCreateManyUserInput | Prisma.PlayListCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PlayListUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlayListWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayListUpdateWithoutUserInput, Prisma.PlayListUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PlayListCreateWithoutUserInput, Prisma.PlayListUncheckedCreateWithoutUserInput>;
};
export type PlayListUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlayListWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayListUpdateWithoutUserInput, Prisma.PlayListUncheckedUpdateWithoutUserInput>;
};
export type PlayListUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PlayListScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayListUpdateManyMutationInput, Prisma.PlayListUncheckedUpdateManyWithoutUserInput>;
};
export type PlayListScalarWhereInput = {
    AND?: Prisma.PlayListScalarWhereInput | Prisma.PlayListScalarWhereInput[];
    OR?: Prisma.PlayListScalarWhereInput[];
    NOT?: Prisma.PlayListScalarWhereInput | Prisma.PlayListScalarWhereInput[];
    id?: Prisma.IntFilter<"PlayList"> | number;
    name?: Prisma.StringFilter<"PlayList"> | string;
    creator?: Prisma.IntFilter<"PlayList"> | number;
};
export type PlayListCreateWithoutSongsInput = {
    name: string;
    user: Prisma.UserCreateNestedOneWithoutPlayistInput;
};
export type PlayListUncheckedCreateWithoutSongsInput = {
    id?: number;
    name: string;
    creator: number;
};
export type PlayListCreateOrConnectWithoutSongsInput = {
    where: Prisma.PlayListWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayListCreateWithoutSongsInput, Prisma.PlayListUncheckedCreateWithoutSongsInput>;
};
export type PlayListUpsertWithoutSongsInput = {
    update: Prisma.XOR<Prisma.PlayListUpdateWithoutSongsInput, Prisma.PlayListUncheckedUpdateWithoutSongsInput>;
    create: Prisma.XOR<Prisma.PlayListCreateWithoutSongsInput, Prisma.PlayListUncheckedCreateWithoutSongsInput>;
    where?: Prisma.PlayListWhereInput;
};
export type PlayListUpdateToOneWithWhereWithoutSongsInput = {
    where?: Prisma.PlayListWhereInput;
    data: Prisma.XOR<Prisma.PlayListUpdateWithoutSongsInput, Prisma.PlayListUncheckedUpdateWithoutSongsInput>;
};
export type PlayListUpdateWithoutSongsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlayistNestedInput;
};
export type PlayListUncheckedUpdateWithoutSongsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlayListCreateManyUserInput = {
    id?: number;
    name: string;
};
export type PlayListUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    songs?: Prisma.SongUpdateManyWithoutPlayistNestedInput;
};
export type PlayListUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    songs?: Prisma.SongUncheckedUpdateManyWithoutPlayistNestedInput;
};
export type PlayListUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type PlayListCountOutputType
 */
export type PlayListCountOutputType = {
    songs: number;
};
export type PlayListCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    songs?: boolean | PlayListCountOutputTypeCountSongsArgs;
};
/**
 * PlayListCountOutputType without action
 */
export type PlayListCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListCountOutputType
     */
    select?: Prisma.PlayListCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PlayListCountOutputType without action
 */
export type PlayListCountOutputTypeCountSongsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
};
export type PlayListSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    creator?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    songs?: boolean | Prisma.PlayList$songsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayListCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playList"]>;
export type PlayListSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    creator?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playList"]>;
export type PlayListSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    creator?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playList"]>;
export type PlayListSelectScalar = {
    id?: boolean;
    name?: boolean;
    creator?: boolean;
};
export type PlayListOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "creator", ExtArgs["result"]["playList"]>;
export type PlayListInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    songs?: boolean | Prisma.PlayList$songsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlayListCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlayListIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PlayListIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PlayListPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlayList";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        songs: Prisma.$SongPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        creator: number;
    }, ExtArgs["result"]["playList"]>;
    composites: {};
};
export type PlayListGetPayload<S extends boolean | null | undefined | PlayListDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlayListPayload, S>;
export type PlayListCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlayListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayListCountAggregateInputType | true;
};
export interface PlayListDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlayList'];
        meta: {
            name: 'PlayList';
        };
    };
    /**
     * Find zero or one PlayList that matches the filter.
     * @param {PlayListFindUniqueArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayListFindUniqueArgs>(args: Prisma.SelectSubset<T, PlayListFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PlayList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayListFindUniqueOrThrowArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayListFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlayListFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindFirstArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayListFindFirstArgs>(args?: Prisma.SelectSubset<T, PlayListFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindFirstOrThrowArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayListFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlayListFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PlayLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayLists
     * const playLists = await prisma.playList.findMany()
     *
     * // Get first 10 PlayLists
     * const playLists = await prisma.playList.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playListWithIdOnly = await prisma.playList.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayListFindManyArgs>(args?: Prisma.SelectSubset<T, PlayListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PlayList.
     * @param {PlayListCreateArgs} args - Arguments to create a PlayList.
     * @example
     * // Create one PlayList
     * const PlayList = await prisma.playList.create({
     *   data: {
     *     // ... data to create a PlayList
     *   }
     * })
     *
     */
    create<T extends PlayListCreateArgs>(args: Prisma.SelectSubset<T, PlayListCreateArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PlayLists.
     * @param {PlayListCreateManyArgs} args - Arguments to create many PlayLists.
     * @example
     * // Create many PlayLists
     * const playList = await prisma.playList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayListCreateManyArgs>(args?: Prisma.SelectSubset<T, PlayListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PlayLists and returns the data saved in the database.
     * @param {PlayListCreateManyAndReturnArgs} args - Arguments to create many PlayLists.
     * @example
     * // Create many PlayLists
     * const playList = await prisma.playList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PlayLists and only return the `id`
     * const playListWithIdOnly = await prisma.playList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayListCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlayListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PlayList.
     * @param {PlayListDeleteArgs} args - Arguments to delete one PlayList.
     * @example
     * // Delete one PlayList
     * const PlayList = await prisma.playList.delete({
     *   where: {
     *     // ... filter to delete one PlayList
     *   }
     * })
     *
     */
    delete<T extends PlayListDeleteArgs>(args: Prisma.SelectSubset<T, PlayListDeleteArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PlayList.
     * @param {PlayListUpdateArgs} args - Arguments to update one PlayList.
     * @example
     * // Update one PlayList
     * const playList = await prisma.playList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayListUpdateArgs>(args: Prisma.SelectSubset<T, PlayListUpdateArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PlayLists.
     * @param {PlayListDeleteManyArgs} args - Arguments to filter PlayLists to delete.
     * @example
     * // Delete a few PlayLists
     * const { count } = await prisma.playList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayListDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlayListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayLists
     * const playList = await prisma.playList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayListUpdateManyArgs>(args: Prisma.SelectSubset<T, PlayListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayLists and returns the data updated in the database.
     * @param {PlayListUpdateManyAndReturnArgs} args - Arguments to update many PlayLists.
     * @example
     * // Update many PlayLists
     * const playList = await prisma.playList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PlayLists and only return the `id`
     * const playListWithIdOnly = await prisma.playList.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayListUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlayListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PlayList.
     * @param {PlayListUpsertArgs} args - Arguments to update or create a PlayList.
     * @example
     * // Update or create a PlayList
     * const playList = await prisma.playList.upsert({
     *   create: {
     *     // ... data to create a PlayList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayList we want to update
     *   }
     * })
     */
    upsert<T extends PlayListUpsertArgs>(args: Prisma.SelectSubset<T, PlayListUpsertArgs<ExtArgs>>): Prisma.Prisma__PlayListClient<runtime.Types.Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListCountArgs} args - Arguments to filter PlayLists to count.
     * @example
     * // Count the number of PlayLists
     * const count = await prisma.playList.count({
     *   where: {
     *     // ... the filter for the PlayLists we want to count
     *   }
     * })
    **/
    count<T extends PlayListCountArgs>(args?: Prisma.Subset<T, PlayListCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayListCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayListAggregateArgs>(args: Prisma.Subset<T, PlayListAggregateArgs>): Prisma.PrismaPromise<GetPlayListAggregateType<T>>;
    /**
     * Group by PlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PlayListGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlayListGroupByArgs['orderBy'];
    } : {
        orderBy?: PlayListGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlayListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PlayList model
     */
    readonly fields: PlayListFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PlayList.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlayListClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    songs<T extends Prisma.PlayList$songsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayList$songsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PlayList model
 */
export interface PlayListFieldRefs {
    readonly id: Prisma.FieldRef<"PlayList", 'Int'>;
    readonly name: Prisma.FieldRef<"PlayList", 'String'>;
    readonly creator: Prisma.FieldRef<"PlayList", 'Int'>;
}
/**
 * PlayList findUnique
 */
export type PlayListFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * Filter, which PlayList to fetch.
     */
    where: Prisma.PlayListWhereUniqueInput;
};
/**
 * PlayList findUniqueOrThrow
 */
export type PlayListFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * Filter, which PlayList to fetch.
     */
    where: Prisma.PlayListWhereUniqueInput;
};
/**
 * PlayList findFirst
 */
export type PlayListFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * Filter, which PlayList to fetch.
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: Prisma.PlayListOrderByWithRelationInput | Prisma.PlayListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayLists.
     */
    cursor?: Prisma.PlayListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayLists.
     */
    distinct?: Prisma.PlayListScalarFieldEnum | Prisma.PlayListScalarFieldEnum[];
};
/**
 * PlayList findFirstOrThrow
 */
export type PlayListFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * Filter, which PlayList to fetch.
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: Prisma.PlayListOrderByWithRelationInput | Prisma.PlayListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayLists.
     */
    cursor?: Prisma.PlayListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayLists.
     */
    distinct?: Prisma.PlayListScalarFieldEnum | Prisma.PlayListScalarFieldEnum[];
};
/**
 * PlayList findMany
 */
export type PlayListFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * Filter, which PlayLists to fetch.
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: Prisma.PlayListOrderByWithRelationInput | Prisma.PlayListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PlayLists.
     */
    cursor?: Prisma.PlayListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayLists.
     */
    skip?: number;
    distinct?: Prisma.PlayListScalarFieldEnum | Prisma.PlayListScalarFieldEnum[];
};
/**
 * PlayList create
 */
export type PlayListCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * The data needed to create a PlayList.
     */
    data: Prisma.XOR<Prisma.PlayListCreateInput, Prisma.PlayListUncheckedCreateInput>;
};
/**
 * PlayList createMany
 */
export type PlayListCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayLists.
     */
    data: Prisma.PlayListCreateManyInput | Prisma.PlayListCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PlayList createManyAndReturn
 */
export type PlayListCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * The data used to create many PlayLists.
     */
    data: Prisma.PlayListCreateManyInput | Prisma.PlayListCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayList update
 */
export type PlayListUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * The data needed to update a PlayList.
     */
    data: Prisma.XOR<Prisma.PlayListUpdateInput, Prisma.PlayListUncheckedUpdateInput>;
    /**
     * Choose, which PlayList to update.
     */
    where: Prisma.PlayListWhereUniqueInput;
};
/**
 * PlayList updateMany
 */
export type PlayListUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayLists.
     */
    data: Prisma.XOR<Prisma.PlayListUpdateManyMutationInput, Prisma.PlayListUncheckedUpdateManyInput>;
    /**
     * Filter which PlayLists to update
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * Limit how many PlayLists to update.
     */
    limit?: number;
};
/**
 * PlayList updateManyAndReturn
 */
export type PlayListUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * The data used to update PlayLists.
     */
    data: Prisma.XOR<Prisma.PlayListUpdateManyMutationInput, Prisma.PlayListUncheckedUpdateManyInput>;
    /**
     * Filter which PlayLists to update
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * Limit how many PlayLists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayList upsert
 */
export type PlayListUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * The filter to search for the PlayList to update in case it exists.
     */
    where: Prisma.PlayListWhereUniqueInput;
    /**
     * In case the PlayList found by the `where` argument doesn't exist, create a new PlayList with this data.
     */
    create: Prisma.XOR<Prisma.PlayListCreateInput, Prisma.PlayListUncheckedCreateInput>;
    /**
     * In case the PlayList was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlayListUpdateInput, Prisma.PlayListUncheckedUpdateInput>;
};
/**
 * PlayList delete
 */
export type PlayListDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
    /**
     * Filter which PlayList to delete.
     */
    where: Prisma.PlayListWhereUniqueInput;
};
/**
 * PlayList deleteMany
 */
export type PlayListDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayLists to delete
     */
    where?: Prisma.PlayListWhereInput;
    /**
     * Limit how many PlayLists to delete.
     */
    limit?: number;
};
/**
 * PlayList.songs
 */
export type PlayList$songsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * PlayList without action
 */
export type PlayListDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: Prisma.PlayListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayList
     */
    omit?: Prisma.PlayListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayListInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PlayList.d.ts.map