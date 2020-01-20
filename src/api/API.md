淘宝客商品查询
$req = new TbkItemGetRequest; 不含优惠券（无用）

淘宝客商品关联推荐查询
$req = new TbkItemRecommendGetRequest;  根据id获取商品关联推荐

//淘宝客商品详情查询（简版）3
$req = new TbkItemInfoGetRequest; 根据id获取分类

//淘宝客店铺查询4 (通过关键词查询)
$req = new TbkShopGetRequest; 天猫店铺直通车

//淘宝客店铺关联推荐查询5
$req = new TbkShopRecommendGetRequest; 通过卖家id获取关联卖家店铺信息

//获取单个选品库的宝贝信息6
$favoritesItem = new TbkUatmFavoritesItemGetRequest;

// 获取淘宝联盟选品库列表7
$favorites = new TbkUatmFavoritesGetRequest;

//海抢购api8
$req = new TbkJuTqgGetRequest; //限时抢购

//链接解析9 (无效)
$req = new TbkItemClickExtractRequest;

// 淘宝客商品猜你喜欢10（无效）
$req = new TbkItemGuessLikeRequest;

//好券清单API 11
$coupon = new TbkDgItemCouponGetRequest;

//阿里妈妈推广券信息查询 12 （返回一个券id）
$req = new TbkCouponGetRequest;
  
// 淘宝客淘口令13 (用于手机)
$req = new TbkTpwdCreateRequest;

//淘客媒体内容输出14 （用于软文）
$req = new TbkContentGetRequest; //返回一个宝贝id列表  配合 淘宝客商品详情查询（简版）3 api 可以得到软文中推荐商品的具体信息

# 淘宝客物料下行 (https://tbk.bbs.taobao.com/detail.html?appId=45301&postId=8576096)
$req = new TbkDgOptimusMaterialRequest;
好券直播3756(max-500) - 大额券9660(max-500) - 高佣榜13366 - 品牌券3786 - 母婴主题4040~ - 有好货4092 - 潮流范4093 - 特惠4094



//通用物料搜索API（导购）16 （通过关键词和分类获取商品）（搜索结果/筛选）
$req = new TbkDgMaterialOptionalRequest;

//淘客媒体内容效果输出 17
$c = new TopClient; //

  // 淘宝客擎天柱通用物料API - 社交 18  / 工具类API（适用于社交群工具） (失效：miss session)
$req = new TbkScOptimusMaterialRequest; //

