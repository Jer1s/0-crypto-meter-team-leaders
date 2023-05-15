const bitcoin = [
  [1681560000000, 39681690.26, 39765658.48, 39681690.26, 39721652.47],
  [1681574400000, 39696620.03, 39754250.7, 39658054.15, 39698138.75],
  [1681588800000, 39635952.88, 39635952.88, 39511809.53, 39570395.12],
  [1681603200000, 39590697.11, 39619292.13, 39546462.36, 39619292.13],
  [1681617600000, 39538274.59, 39580972.3, 39485214.75, 39523502.12],
  [1681632000000, 39481715.44, 39575824.4, 39481715.44, 39573029.25],
  [1681646400000, 39677111.85, 39677111.85, 39534221.88, 39545408.08],
  [1681660800000, 39450704.3, 39588296.29, 39450704.3, 39588296.29],
  [1681675200000, 39645584.91, 39645584.91, 39554208.88, 39587636],
  [1681689600000, 39726622.61, 39726622.61, 39580510.64, 39580510.64],
  [1681704000000, 39528938.67, 39528938.67, 39120006.48, 39422321.32],
  [1681718400000, 39399841.65, 39420940.87, 39238316.74, 39238316.74],
  [1681732800000, 39165986.84, 39281976.77, 39165986.84, 39281976.77],
  [1681747200000, 39040927.53, 39040927.53, 38796298.86, 38876122.92],
  [1681761600000, 38788562.89, 38968958.19, 38788562.89, 38968958.19],
  [1681776000000, 38889958.22, 38956692.72, 38886737.64, 38956692.72],
  [1681790400000, 38833618.68, 38847605.79, 38726993.53, 38847605.79],
  [1681804800000, 38882386.75, 39168851.29, 38882386.75, 39168851.29],
  [1681819200000, 39275680.07, 39399236.66, 39133363.15, 39387233.27],
  [1681833600000, 40084753.34, 40084753.34, 39925364.79, 39925364.79],
  [1681848000000, 39780292.54, 39890348.42, 39651785.9, 39762385.48],
  [1681862400000, 39818053.68, 40061206.07, 39818053.68, 39940420.4],
  [1681876800000, 39988859.2, 39988859.2, 39812782.55, 39812782.55],
  [1681891200000, 39852690.77, 39951108.19, 39818624.2, 39951108.19],
  [1681905600000, 40040101.13, 40040101.13, 38952241.04, 38952241.04],
  [1681920000000, 39132743.52, 39194783.77, 38966090.9, 39194783.77],
  [1681934400000, 38943479.19, 39032000.49, 38943479.19, 38949098.2],
  [1681948800000, 38951231.06, 38951231.06, 38666395.18, 38666395.18],
  [1681963200000, 38313170.24, 38477880.47, 38247427.55, 38247427.55],
  [1681977600000, 38304404.96, 38361985.69, 38256110.76, 38292554.53],
  [1681992000000, 38305350.32, 38305350.32, 38173625.81, 38173625.81],
  [1682006400000, 37942308.93, 38195378.22, 37942308.93, 37971762.78],
  [1682020800000, 37880797.93, 37880797.93, 37562542.57, 37562542.57],
  [1682035200000, 37257087.53, 37353181.88, 37257087.53, 37353181.88],
  [1682049600000, 37383677.54, 37567696.53, 37383677.54, 37536389.68],
  [1682064000000, 37651239.86, 37651239.86, 37232064.67, 37232064.67],
  [1682078400000, 37324746.98, 37324746.98, 37225630.8, 37225630.8],
  [1682092800000, 37292968.8, 37499921.73, 37292968.8, 37363767.74],
  [1682107200000, 37263192.13, 37306643.42, 36995833.68, 36995833.68],
  [1682121600000, 36282542, 36365504.63, 36278472.01, 36278472.01],
  [1682136000000, 36299548.2, 36331126.54, 36239354.16, 36275191.74],
  [1682150400000, 36381167.56, 36441810.27, 36381167.56, 36395997.32],
  [1682164800000, 36308532.17, 36308532.17, 36243276.93, 36293128],
  [1682179200000, 36322172.06, 36486896.17, 36287633.8, 36486896.17],
  [1682193600000, 36590161.87, 36834063.8, 36590161.87, 36748397.53],
  [1682208000000, 36776753.32, 37072683.9, 36776753.32, 37072683.9],
  [1682222400000, 37025935.31, 37025935.31, 36630551.84, 36744242.63],
  [1682236800000, 36670894.19, 36754275.49, 36670894.19, 36743435.18],
  [1682251200000, 36977641.99, 36977641.99, 36634276.46, 36634276.46],
  [1682265600000, 36794325.84, 36799292.76, 36672794.74, 36672794.74],
  [1682280000000, 36578244.37, 36689888.18, 36498917.34, 36498917.34],
  [1682294400000, 36601571.37, 36713907.43, 36590071.07, 36713907.43],
  [1682308800000, 36727248.56, 36969397.37, 36727248.56, 36969397.37],
  [1682323200000, 37051809.1, 37051809.1, 36865180.88, 36865180.88],
  [1682337600000, 36672253.61, 36672253.61, 36414265.35, 36577607.58],
  [1682352000000, 36716012.77, 36817828.06, 36653503.62, 36720532.12],
  [1682366400000, 36408059.49, 36530153.94, 36378243.37, 36470196.4],
  [1682380800000, 36499286.13, 36598393.09, 36499286.13, 36598393.09],
  [1682395200000, 36675825.66, 36675825.66, 36540544.95, 36591639.29],
  [1682409600000, 36571411.62, 36629809.06, 36544484.31, 36544484.31],
  [1682424000000, 36517780.24, 36577926.65, 36515156.77, 36577926.65],
  [1682438400000, 36660035.91, 36660035.91, 36614478.39, 36614478.39],
  [1682452800000, 36718348.67, 37130507.97, 36718348.67, 37130507.97],
  [1682467200000, 37112936.53, 37910152.69, 37112936.53, 37839212.28],
  [1682481600000, 38026922.01, 38026922.01, 37871891.85, 37965123.25],
  [1682496000000, 37921923.92, 37923486.95, 37898562.34, 37923486.95],
  [1682510400000, 37920755.39, 38783591.14, 37920755.39, 38783591.14],
  [1682524800000, 38738713.32, 39928353.37, 38738713.32, 39717019.43],
  [1682539200000, 39839480.16, 39844792.63, 39810764.6, 39810764.6],
  [1682553600000, 37563240.39, 38038934.9, 37563240.39, 38038934.9],
  [1682568000000, 37941044.19, 39210513.21, 37941044.19, 38958793.25],
  [1682582400000, 38915765.88, 39091668.51, 38595442.15, 38595442.15],
  [1682596800000, 38750364.91, 38854254.16, 38750364.91, 38854254.16],
  [1682611200000, 38785592.26, 39029977.54, 38717807.63, 39029977.54],
  [1682625600000, 39065456.37, 40002508.69, 39000687.96, 40002508.69],
  [1682640000000, 39782571.04, 39782571.04, 39474012.08, 39474012.08],
  [1682654400000, 39507488.75, 39507488.75, 39459293.95, 39459293.95],
  [1682668800000, 39419032.24, 39517464.88, 39419032.24, 39434394.69],
  [1682683200000, 39513256.65, 39513256.65, 39155395.06, 39232913.61],
  [1682697600000, 39228134.43, 39243705.88, 38782899.41, 39079151.24],
  [1682712000000, 39046476.81, 39195316.86, 39046476.81, 39081806],
  [1682726400000, 39232051.61, 39336956.12, 39232051.61, 39336956.12],
  [1682740800000, 39261607.71, 39347331.35, 39154726.88, 39347331.35],
  [1682755200000, 39328787.4, 39333551.21, 39269580.31, 39269580.31],
  [1682769600000, 39319651.85, 39319651.85, 39210579.02, 39210579.02],
  [1682784000000, 39254908.03, 39373502.65, 39239902.66, 39301618.49],
  [1682798400000, 39254692.35, 39254692.35, 39015889.39, 39073190.79],
  [1682812800000, 39175730.61, 39175730.61, 39098088.05, 39128035.75],
  [1682827200000, 39098284.01, 39098284.01, 39027035.97, 39059407.67],
  [1682841600000, 39069760.82, 39204819.89, 39069760.82, 39204819.89],
  [1682856000000, 39214693.66, 39214693.66, 39121224.3, 39121224.3],
  [1682870400000, 39101543.13, 39395808.55, 39101543.13, 39395808.55],
  [1682884800000, 39890251.52, 39890251.52, 39685426.43, 39685426.43],
  [1682899200000, 39286582.76, 39397130.22, 39273313.01, 39341517.04],
  [1682913600000, 39291412.99, 39295253.56, 38334682.47, 38334682.47],
  [1682928000000, 38290631.18, 38308425.1, 38094742.01, 38308425.1],
  [1682942400000, 38386363.74, 38386363.74, 38273165.05, 38273165.05],
  [1682956800000, 38266292.04, 38310528.46, 38172645.78, 38172645.78],
  [1682971200000, 37783699.46, 38093914.19, 37783699.46, 37793130.37],
  [1682985600000, 37451314.02, 37611414.46, 37259543.47, 37606773.95],
  [1683000000000, 37775782.48, 37775782.48, 37532906.35, 37534066.46],
  [1683014400000, 37573865.3, 37573865.3, 37504242.62, 37566521.93],
  [1683028800000, 37576210.33, 37603943.97, 37574514.04, 37597413.31],
  [1683043200000, 37644827.07, 38187459.84, 37596646.15, 38187459.84],
  [1683057600000, 38288599.23, 38576883.8, 38231638.23, 38576883.8],
  [1683072000000, 38579376.37, 38579376.37, 38434051.91, 38572588.75],
  [1683086400000, 38472088.55, 38472088.55, 38193553.76, 38193553.76],
  [1683100800000, 38193265.19, 38278929.16, 38067071.15, 38278929.16],
  [1683115200000, 38312814.19, 38312814.19, 38203950.26, 38203950.26],
  [1683129600000, 38158736.14, 38158736.14, 37648085.69, 37648085.69],
  [1683144000000, 37766712.22, 38065436.8, 37766712.22, 37867092.36],
  [1683158400000, 37905203.99, 38786293.65, 37905203.99, 38786293.65],
  [1683172800000, 38714063.72, 38714063.72, 38456636.2, 38456636.2],
  [1683187200000, 38520199.53, 38659132.55, 38520199.53, 38616383.5],
  [1683201600000, 38512801.61, 38731124.93, 38461821, 38731124.93],
  [1683216000000, 38596825.88, 38596825.88, 38195041.32, 38276482.13],
  [1683230400000, 38275069.24, 38290619.97, 38122637.36, 38122637.36],
  [1683244800000, 38232829.83, 38232829.83, 38065528.43, 38065528.43],
  [1683259200000, 38122905.21, 38635682.54, 38122905.21, 38603363.11],
  [1683273600000, 38427942.28, 38566988.62, 38427942.28, 38521176.7],
  [1683288000000, 38362019.76, 38362019.76, 38342009.93, 38343147.78],
  [1683302400000, 38388456.37, 38660536.3, 38388456.37, 38660536.3],
  [1683316800000, 38657079.55, 38986751.95, 38657079.55, 38783002.63],
  [1683331200000, 38901373.17, 39067127.66, 38901373.17, 39067127.66],
  [1683345600000, 38906456.34, 39175435.75, 38861890.39, 38861890.39],
  [1683360000000, 38726249.36, 38745157.88, 38723167.65, 38723167.65],
  [1683374400000, 38779481.38, 38779481.38, 38601361.62, 38601361.62],
  [1683388800000, 38596814.12, 38596814.12, 37755525.35, 37755525.35],
  [1683403200000, 37737524.57, 38128321.21, 37737524.57, 38128321.21],
  [1683417600000, 38090567.2, 38090567.2, 37975223.89, 38088518.31],
  [1683432000000, 38072742.75, 38206694.69, 38072742.75, 38079031.34],
  [1683446400000, 37994533.69, 38177411.93, 37994533.69, 38177411.93],
  [1683460800000, 38164203.73, 38164203.73, 38023238.78, 38060690.07],
  [1683475200000, 38049691.26, 38343253.57, 38049691.26, 38343253.57],
  [1683489600000, 38204821.63, 38204821.63, 38127890.88, 38127890.88],
  [1683504000000, 38173779.87, 38173779.87, 38014739.42, 38014739.42],
  [1683518400000, 37708741.56, 37875959.25, 37438872.94, 37438872.94],
  [1683532800000, 37249006.13, 37327161.15, 37179753.87, 37263544.81],
  [1683547200000, 37021045.83, 37021045.83, 36886055.37, 36967500.81],
  [1683561600000, 36900638.69, 36900638.69, 36776308.26, 36900297.88],
  [1683576000000, 36882351.95, 36882351.95, 36365070.82, 36365070.82],
  [1683590400000, 36280108.35, 36569343.93, 36280108.35, 36569343.93],
  [1683604800000, 36647246, 36687686.18, 36552593.94, 36552593.94],
  [1683619200000, 36553906.83, 36553906.83, 36414684.47, 36414684.47],
  [1683633600000, 36577599.72, 36586605.91, 36517895.73, 36558881.11],
  [1683648000000, 36689981.58, 36764309.37, 36479234.91, 36479234.91],
  [1683662400000, 36485668.76, 36661502.4, 36483468.71, 36661502.4],
  [1683676800000, 36636596.4, 36688347.82, 36531171.77, 36531171.77],
  [1683691200000, 36677535.94, 36754156.15, 36660414.85, 36660414.85],
  [1683705600000, 36663465.83, 36670763.34, 36556001.04, 36556001.04],
  [1683720000000, 36541421.45, 36541421.45, 36521312.8, 36521312.8],
  [1683734400000, 36658135.89, 37234674.65, 36658135.89, 37234674.65],
  [1683748800000, 37187401.45, 37264786.03, 36228478.52, 36254435.03],
  [1683763200000, 36554485.41, 36755418.78, 36278822.88, 36466545.6],
  [1683777600000, 36440224.73, 36440224.73, 36318625.21, 36404669.07],
  [1683792000000, 36338578.06, 36526214.13, 36309323.32, 36526214.13],
  [1683806400000, 36578659.99, 36578659.99, 36480051.6, 36519873.61],
  [1683820800000, 36416183.25, 36445149.43, 36025913.74, 36025913.74],
  [1683835200000, 36287675.76, 36287675.76, 35823201.26, 35877866.06],
  [1683849600000, 35742235.64, 35974660.91, 35742235.64, 35855851.91],
  [1683864000000, 35916698.02, 36025004.23, 35760127.98, 35760127.98],
  [1683878400000, 35521158.8, 35554024.53, 35051390.33, 35051390.33],
  [1683892800000, 35126402.13, 35238666.01, 35084445.82, 35211863.73],
  [1683907200000, 35269250.87, 35444255.29, 35269250.87, 35444255.29],
  [1683921600000, 35314178.32, 35336103.35, 35259089.18, 35336103.35],
  [1683936000000, 35519550.64, 35937864.66, 35519550.64, 35857453.15],
  [1683950400000, 35974218.45, 36077815.37, 35937304.54, 35937304.54],
  [1683964800000, 36028121.04, 36028121.04, 35925015.48, 35925015.48],
  [1683979200000, 35981938.61, 36038320.5, 35981938.61, 36038320.5],
  [1683993600000, 36011793.44, 36047249.38, 36005935.7, 36032056.52],
  [1684008000000, 36000617.29, 36218073.71, 36000617.29, 36218073.71],
  [1684022400000, 36053318.21, 36133724.53, 36053318.21, 36133724.53],
  [1684036800000, 35972023.76, 35995870.42, 35882041.36, 35995870.42],
  [1684051200000, 36038133.14, 36088913.94, 36016856.53, 36088913.94],
  [1684065600000, 36055877.38, 36058189.22, 36046370.55, 36046370.55],
  [1684080000000, 35992747.95, 36143581.8, 35992747.95, 36143581.8],
  [1684094400000, 36401997.56, 36401997.56, 36137387.9, 36137387.9],
  [1684108800000, 36083644.16, 36164965.12, 36083644.16, 36164965.12],
  [1684123200000, 36158542.53, 36431332.04, 35877764.98, 36402060.84],
  [1684137600000, 36485381.05, 36722279.07, 36478288.22, 36722279.07],
  [1684152000000, 36659740.99, 36659740.99, 36659740.99, 36659740.99],
];
export default bitcoin;