# Changelog

## [1.3.0](https://github.com/bucketeer-io/bucketeer/compare/v1.2.0...v1.3.0) (2025-02-28)


### Features

* add branch URL generation for code references ([#1490](https://github.com/bucketeer-io/bucketeer/issues/1490)) ([0206276](https://github.com/bucketeer-io/bucketeer/commit/0206276f5538fd3d8bf5de3d8684abcb78dac7ec))
* add file extension support for code references ([#1493](https://github.com/bucketeer-io/bucketeer/issues/1493)) ([fd2d38a](https://github.com/bucketeer-io/bucketeer/commit/fd2d38a65a171f20d4d5e3a7c718a3bfbf2853b6))
* be able to group slack notifications by feature flag tag ([#1472](https://github.com/bucketeer-io/bucketeer/issues/1472)) ([fcd92d2](https://github.com/bucketeer-io/bucketeer/commit/fcd92d2923d7cfc9b54ce528bc4f1e45921cf030))
* implement create/update environment api no command ([#1540](https://github.com/bucketeer-io/bucketeer/issues/1540)) ([bfc545a](https://github.com/bucketeer-io/bucketeer/commit/bfc545af324c352af176b8602abb5b2f7a73b4a7))
* implement delete goal no cmd ([#1473](https://github.com/bucketeer-io/bucketeer/issues/1473)) ([aa09981](https://github.com/bucketeer-io/bucketeer/commit/aa09981166ee6d28465edd179cd2120f33371648))
* implement get create list experiments no command ([#1468](https://github.com/bucketeer-io/bucketeer/issues/1468)) ([9d21e17](https://github.com/bucketeer-io/bucketeer/commit/9d21e17751297f98f589a6ef2d52bab4aad5fb7f))
* implement REST experiment result api ([#1534](https://github.com/bucketeer-io/bucketeer/issues/1534)) ([5d0b3ab](https://github.com/bucketeer-io/bucketeer/commit/5d0b3ab5390e2b85992bc9e456aac04f4f7b2a79))
* implement REST get/list/create auto ops rule ([#1511](https://github.com/bucketeer-io/bucketeer/issues/1511)) ([277b969](https://github.com/bucketeer-io/bucketeer/commit/277b9695af4cb56b7042048830aa210f3093c328))
* implement update experiment REST no command ([#1482](https://github.com/bucketeer-io/bucketeer/issues/1482)) ([6468dba](https://github.com/bucketeer-io/bucketeer/commit/6468dba2fd8851db9270070d0862720ebf8d99cf))
* **ui/dashboard:** add tags to slack notifications ([#1514](https://github.com/bucketeer-io/bucketeer/issues/1514)) ([7d8d731](https://github.com/bucketeer-io/bucketeer/commit/7d8d731f3abbb241a929042bc3fa9e54920511ec))
* **ui/dashboard:** goals managements ([#1451](https://github.com/bucketeer-io/bucketeer/issues/1451)) ([a8641b3](https://github.com/bucketeer-io/bucketeer/commit/a8641b3ab327b8ef476343a8c04a340a6bbcef07))
* **ui/dashboard:** improvement tags and table cell view with tooltip ([#1452](https://github.com/bucketeer-io/bucketeer/issues/1452)) ([b2e8c9d](https://github.com/bucketeer-io/bucketeer/commit/b2e8c9d23ccd2775931b0d7fb5be33debedd6eea))
* update/execute/stop auto ops rule REST no command ([#1519](https://github.com/bucketeer-io/bucketeer/issues/1519)) ([856fe8e](https://github.com/bucketeer-io/bucketeer/commit/856fe8e0fce73bca0eb8e1e1f7a4637afc31f127))


### Bug Fixes

* add missing experiment status in response ([#1492](https://github.com/bucketeer-io/bucketeer/issues/1492)) ([1092dea](https://github.com/bucketeer-io/bucketeer/commit/1092dea32285c5e5e8534c795cdfbcbc618c8b8d))
* add order by options and correct experiment summary ([#1522](https://github.com/bucketeer-io/bucketeer/issues/1522)) ([bc2be07](https://github.com/bucketeer-io/bucketeer/commit/bc2be078a226d71e026877e760700e8cab5c178b))
* ambiguous clause error while deleting a tag ([#1483](https://github.com/bucketeer-io/bucketeer/issues/1483)) ([44c2a19](https://github.com/bucketeer-io/bucketeer/commit/44c2a1996e17edf35ee77d209f558c302d492188))
* cannot delete all tags in the account update api ([#1537](https://github.com/bucketeer-io/bucketeer/issues/1537)) ([29c1d58](https://github.com/bucketeer-io/bucketeer/commit/29c1d5825b1460cd1eb3d83c7e613ccb629af84f))
* evaluation unique count not working for go sdk ([#1532](https://github.com/bucketeer-io/bucketeer/issues/1532)) ([a9557ae](https://github.com/bucketeer-io/bucketeer/commit/a9557ae565a1d526f946b7c3988500da0f05dd38))
* feature update api not validating required fields before saving ([#1527](https://github.com/bucketeer-io/bucketeer/issues/1527)) ([5ce2051](https://github.com/bucketeer-io/bucketeer/commit/5ce205162d00f72fcd988f1fed091797ffc08a9b))
* goal in-use-status is always false when the connection type is operation ([#1505](https://github.com/bucketeer-io/bucketeer/issues/1505)) ([e3f44ee](https://github.com/bucketeer-io/bucketeer/commit/e3f44ee18e59a103d3ca9901799e7abadb767079))
* list tags by environment_id filter ([#1479](https://github.com/bucketeer-io/bucketeer/issues/1479)) ([7c736ef](https://github.com/bucketeer-io/bucketeer/commit/7c736ef5760ef0a0425721e8ace5b53a802723e6))
* **ui:** displaying the same tag when listing tags ([#1478](https://github.com/bucketeer-io/bucketeer/issues/1478)) ([63b5c72](https://github.com/bucketeer-io/bucketeer/commit/63b5c72f85068efdf4df546b440520f25682ddf7))
* **ui:** list goals not using the connection type ([#1507](https://github.com/bucketeer-io/bucketeer/issues/1507)) ([dc8a295](https://github.com/bucketeer-io/bucketeer/commit/dc8a2957d5be48c80beb4e1a2944ee775c6ed891))
* **ui:** remove connection type validation from create goal modal ([#1502](https://github.com/bucketeer-io/bucketeer/issues/1502)) ([65b95ee](https://github.com/bucketeer-io/bucketeer/commit/65b95eebc6850ac28972e6789b00ec48b257f15a))
* update feature api cannot update empty lists ([#1509](https://github.com/bucketeer-io/bucketeer/issues/1509)) ([82029e1](https://github.com/bucketeer-io/bucketeer/commit/82029e1d8d5a30c482aaa81d693fb07556eb9e81))


### Miscellaneous

* add auto ops status to the goal connection reference ([#1497](https://github.com/bucketeer-io/bucketeer/issues/1497)) ([8740728](https://github.com/bucketeer-io/bucketeer/commit/874072839279be2c7590e62d646e113ac3ad400c))
* add debug log for the notification sender ([#1487](https://github.com/bucketeer-io/bucketeer/issues/1487)) ([3b2ceac](https://github.com/bucketeer-io/bucketeer/commit/3b2ceac0e09480aea915fec636ade4ae3fc38fe1))
* add error logs while authenticating the user ([#1520](https://github.com/bucketeer-io/bucketeer/issues/1520)) ([105e73c](https://github.com/bucketeer-io/bucketeer/commit/105e73c49ed92fb68814e71333bb745f15da4df4))
* add feature name to the goal auto ops reference ([#1500](https://github.com/bucketeer-io/bucketeer/issues/1500)) ([4e0e1a1](https://github.com/bucketeer-io/bucketeer/commit/4e0e1a1b1b8512b566a0fa5b0e32b6c913868fda))
* add fields to update feature api to update the schedule update ([#1515](https://github.com/bucketeer-io/bucketeer/issues/1515)) ([af97827](https://github.com/bucketeer-io/bucketeer/commit/af97827fabee949968466d73b248b390796fef00))
* add new error flag reasons for open feature support ([#1517](https://github.com/bucketeer-io/bucketeer/issues/1517)) ([ee8f8e7](https://github.com/bucketeer-io/bucketeer/commit/ee8f8e7a0e1fc81f90e6745cbc0db143b899e105))
* add schedule update field to feature proto message ([#1499](https://github.com/bucketeer-io/bucketeer/issues/1499)) ([ddbd7f0](https://github.com/bucketeer-io/bucketeer/commit/ddbd7f0b951b71dddb81dae55c1113ec1273a3bc))
* add schedule update field to feature proto message ([#1506](https://github.com/bucketeer-io/bucketeer/issues/1506)) ([dd1fca7](https://github.com/bucketeer-io/bucketeer/commit/dd1fca729e4bb999b3371f01f9fe3ae0376071a8))
* add scheduled_flag_update table and proto message ([#1535](https://github.com/bucketeer-io/bucketeer/issues/1535)) ([47b4ee6](https://github.com/bucketeer-io/bucketeer/commit/47b4ee6873502f3b66aed83751a53e60f1f7f29e))
* add sorting filter for entity type in the list tags api ([#1476](https://github.com/bucketeer-io/bucketeer/issues/1476)) ([3a35f75](https://github.com/bucketeer-io/bucketeer/commit/3a35f75a3f95a169677d52aecd13baab3d76ab87))
* code ref fields doc ([#1485](https://github.com/bucketeer-io/bucketeer/issues/1485)) ([a3f8c60](https://github.com/bucketeer-io/bucketeer/commit/a3f8c60aca766e333eb2f727efa398c0c3ed0d2b))
* fix the debug log in the notification sender ([#1486](https://github.com/bucketeer-io/bucketeer/issues/1486)) ([9c83de7](https://github.com/bucketeer-io/bucketeer/commit/9c83de71414204219050736ee398fe93b23771a9))
* implement create and update project with not commands ([#1541](https://github.com/bucketeer-io/bucketeer/issues/1541)) ([ce8c8c8](https://github.com/bucketeer-io/bucketeer/commit/ce8c8c8d24dbb5539301000043dd1878e209ecc0))
* implement rest for list features api ([#1543](https://github.com/bucketeer-io/bucketeer/issues/1543)) ([4bdb42c](https://github.com/bucketeer-io/bucketeer/commit/4bdb42c7c09aa7e1a81f039260b433ff4abb5daf))
* improve bucket hash algorithm using murmurHash3 instead of md5 ([#1523](https://github.com/bucketeer-io/bucketeer/issues/1523)) ([1e5a2c1](https://github.com/bucketeer-io/bucketeer/commit/1e5a2c1a1cadd2c4d85218938481245cf856f325))
* populate goal table with connection type ([#1491](https://github.com/bucketeer-io/bucketeer/issues/1491)) ([1c90d0a](https://github.com/bucketeer-io/bucketeer/commit/1c90d0af3a6cc7f3951f22c6a1042fdbb70a2611))
* support list tags by organization id ([#1480](https://github.com/bucketeer-io/bucketeer/issues/1480)) ([1120b0b](https://github.com/bucketeer-io/bucketeer/commit/1120b0bc00bc138f4482b43acbe86912f63f36f7))


### Reverts

* add schedule update field to feature proto message ([#1499](https://github.com/bucketeer-io/bucketeer/issues/1499)) ([#1503](https://github.com/bucketeer-io/bucketeer/issues/1503)) ([e228d0d](https://github.com/bucketeer-io/bucketeer/commit/e228d0d9ce93081c4d6bfcdf0e3f066627327a10))

## [1.2.0](https://github.com/bucketeer-io/bucketeer/compare/v1.1.0...v1.2.0) (2025-01-22)


### Features

* add connection type to goal, query connections when getting goal ([#1456](https://github.com/bucketeer-io/bucketeer/issues/1456)) ([5d01e7f](https://github.com/bucketeer-io/bucketeer/commit/5d01e7fdf76c2bbb80958ba734be9417fc867811))
* add disabled field for push ([#1406](https://github.com/bucketeer-io/bucketeer/issues/1406)) ([c93b443](https://github.com/bucketeer-io/bucketeer/commit/c93b4436322f6bf9735262e46b218673cc196e8b))
* add organization_id condition for list api key ([#1373](https://github.com/bucketeer-io/bucketeer/issues/1373)) ([e803651](https://github.com/bucketeer-io/bucketeer/commit/e803651c666df643b690c4f6a0fe9f620ee7ddab))
* add tag deleter ([#1469](https://github.com/bucketeer-io/bucketeer/issues/1469)) ([6558bd0](https://github.com/bucketeer-io/bucketeer/commit/6558bd018b061f6f7e4fc1d4b6643fdded466da6))
* add tag domain and storage implementation ([#1433](https://github.com/bucketeer-io/bucketeer/issues/1433)) ([a2078e5](https://github.com/bucketeer-io/bucketeer/commit/a2078e5caae9fc91adf6fbce6987f2ffab7c0f3d))
* add tag service ([#1443](https://github.com/bucketeer-io/bucketeer/issues/1443)) ([bf69850](https://github.com/bucketeer-io/bucketeer/commit/bf698501b56428193c3075e69929ccb959c9bdf4))
* code reference API ([#1395](https://github.com/bucketeer-io/bucketeer/issues/1395)) ([6b2ae5f](https://github.com/bucketeer-io/bucketeer/commit/6b2ae5fbae3d8613b57251e2e30bcbac5c627d49))
* evaluation logic in typescript for nodejs sdk ([#1258](https://github.com/bucketeer-io/bucketeer/issues/1258)) ([d56ebab](https://github.com/bucketeer-io/bucketeer/commit/d56ebab312387cdb7cf3fdb8acb28ffa064e1745))
* expose http protocol for push APIs ([#1379](https://github.com/bucketeer-io/bucketeer/issues/1379)) ([e5b077a](https://github.com/bucketeer-io/bucketeer/commit/e5b077a9a8a17b64c00bcb25f027f4b0a8d7c44d))
* implement create, list, get goal REST api no command ([#1445](https://github.com/bucketeer-io/bucketeer/issues/1445)) ([8b24d8e](https://github.com/bucketeer-io/bucketeer/commit/8b24d8e13a04414f5e53192c48ab60ba153b7d4c))
* implement http get and create notification apis, remove command patterns from create and delete apis ([#1394](https://github.com/bucketeer-io/bucketeer/issues/1394)) ([d330622](https://github.com/bucketeer-io/bucketeer/commit/d33062225e43d6e238286ae80ca0e0088a0cb8b3))
* implement public API create and update account ([#1376](https://github.com/bucketeer-io/bucketeer/issues/1376)) ([1764266](https://github.com/bucketeer-io/bucketeer/commit/1764266130665985da50e6c2181caa508c328eb9))
* implement REST bulk download segment users ([#1448](https://github.com/bucketeer-io/bucketeer/issues/1448)) ([03efd5d](https://github.com/bucketeer-io/bucketeer/commit/03efd5d7c08dc71477e3c3b0d786094f50632759))
* implement REST get segment, list segments, create segment ([#1418](https://github.com/bucketeer-io/bucketeer/issues/1418)) ([8608fe3](https://github.com/bucketeer-io/bucketeer/commit/8608fe38b5d34c7c5e5bb1dcfc2e8c4664c54037))
* implement REST list tags [#1408](https://github.com/bucketeer-io/bucketeer/issues/1408) ([4a7fd14](https://github.com/bucketeer-io/bucketeer/commit/4a7fd14b3b6ca80886f3afcbc3955d9fb3b88115))
* implement rest update and delete segment REST ([#1441](https://github.com/bucketeer-io/bucketeer/issues/1441)) ([18bfb03](https://github.com/bucketeer-io/bucketeer/commit/18bfb036e90cc4294ae7f912b3db11feaf750045))
* implement save api key as editor mechanism ([#1352](https://github.com/bucketeer-io/bucketeer/issues/1352)) ([fa2e6cf](https://github.com/bucketeer-io/bucketeer/commit/fa2e6cf0e71cf58651e307d60f0a4a54ef872903))
* init http route and remove command pattern for update notification ([#1396](https://github.com/bucketeer-io/bucketeer/issues/1396)) ([7e31980](https://github.com/bucketeer-io/bucketeer/commit/7e3198001a0c993226c8e89baee8199d3ec29f8d))
* return extra info of public API key and obfuscate the returned key ([#1349](https://github.com/bucketeer-io/bucketeer/issues/1349)) ([736d9a0](https://github.com/bucketeer-io/bucketeer/commit/736d9a05767577fc3c44cd14fff9867d7714d832))
* save cache in child redis instances ([#1392](https://github.com/bucketeer-io/bucketeer/issues/1392)) ([b0b1bb4](https://github.com/bucketeer-io/bucketeer/commit/b0b1bb48a5f13039e1d3ccdb6689f14f637c671b))
* support filter by organization_id in list subscription v2 and expose http ([#1387](https://github.com/bucketeer-io/bucketeer/issues/1387)) ([151bd30](https://github.com/bucketeer-io/bucketeer/commit/151bd302add4341c261b08a16fc97212136e8c0c))
* **ui/dashboard:** fcm management ([#1401](https://github.com/bucketeer-io/bucketeer/issues/1401)) ([4e55a13](https://github.com/bucketeer-io/bucketeer/commit/4e55a1370996bfb25ef83215221ff9bbde9be284))
* **ui/dashboard:** slack management ([#1402](https://github.com/bucketeer-io/bucketeer/issues/1402)) ([d7b8208](https://github.com/bucketeer-io/bucketeer/commit/d7b82086b0294ed55286e9b9d362b42452fa2b5f))
* **ui/dashboard:** update api keys list ([#1346](https://github.com/bucketeer-io/bucketeer/issues/1346)) ([f05e58c](https://github.com/bucketeer-io/bucketeer/commit/f05e58c872add8f9c49c91b7cd89fcbc3303ec56))
* **ui/dashboard:** user segments management ([#1426](https://github.com/bucketeer-io/bucketeer/issues/1426)) ([bd8710e](https://github.com/bucketeer-io/bucketeer/commit/bd8710e43ab2c038e771d810f91a3da85eadef4a))
* **ui:** add goal connection type on the create goal form ([#1466](https://github.com/bucketeer-io/bucketeer/issues/1466)) ([f668d1e](https://github.com/bucketeer-io/bucketeer/commit/f668d1ec009402f37ef23a896b40442854e59ec7))
* **ui:** add variation id to the debugger results page ([#1427](https://github.com/bucketeer-io/bucketeer/issues/1427)) ([e1f7c79](https://github.com/bucketeer-io/bucketeer/commit/e1f7c7922ef874ea965be14f2428ff07c0cf5f0b))
* update goal REST no command ([#1464](https://github.com/bucketeer-io/bucketeer/issues/1464)) ([aeabf7e](https://github.com/bucketeer-io/bucketeer/commit/aeabf7e941c42dff88c55670aedd3e7dc1f05ceb))


### Bug Fixes

* cannot delete pfmerge key when deleting counts ([#1366](https://github.com/bucketeer-io/bucketeer/issues/1366)) ([5474107](https://github.com/bucketeer-io/bucketeer/commit/5474107eca9252c939baedfcdd6be3a6679bd36e))
* cannot write against a read-only redis replica ([#1378](https://github.com/bucketeer-io/bucketeer/issues/1378)) ([3a29bbd](https://github.com/bucketeer-io/bucketeer/commit/3a29bbdc17c58555670971cd1ab4765589bc613d))
* change dev container start docker system prune to images prune ([#1400](https://github.com/bucketeer-io/bucketeer/issues/1400)) ([89b4af1](https://github.com/bucketeer-io/bucketeer/commit/89b4af1659ad337ff48856669db5c48f21858620))
* delete pfmerge key after count users ([#1375](https://github.com/bucketeer-io/bucketeer/issues/1375)) ([d4c6eec](https://github.com/bucketeer-io/bucketeer/commit/d4c6eecab185eaac20ad4ae76516c7249c53aecc))
* info and error log level ([#1413](https://github.com/bucketeer-io/bucketeer/issues/1413)) ([ff82dbe](https://github.com/bucketeer-io/bucketeer/commit/ff82dbe23b2985524db22a682a162f613e78bd7b))
* request method for account and environment svc ([#1409](https://github.com/bucketeer-io/bucketeer/issues/1409)) ([83fa5e3](https://github.com/bucketeer-io/bucketeer/commit/83fa5e301dc05222ae1d78a670dfd809d0c5c21c))
* scan error on column index error in the goal api ([#1462](https://github.com/bucketeer-io/bucketeer/issues/1462)) ([0b63009](https://github.com/bucketeer-io/bucketeer/commit/0b63009f797468c0e1405388ed418b190df5ffa1))
* subscriber logs when reporting bigquery errors ([#1397](https://github.com/bucketeer-io/bucketeer/issues/1397)) ([8f3ded4](https://github.com/bucketeer-io/bucketeer/commit/8f3ded43b0eaa9378c9f8a9ad36d759261d9d057))
* system admin user's last seen not being updated ([#1425](https://github.com/bucketeer-io/bucketeer/issues/1425)) ([436963f](https://github.com/bucketeer-io/bucketeer/commit/436963f7d478d94c5567fff69fa8f9851e38e79f))
* **ui/dashboard:** organization table list ([#1411](https://github.com/bucketeer-io/bucketeer/issues/1411)) ([9472d65](https://github.com/bucketeer-io/bucketeer/commit/9472d659bc2fc21cd9c4d487b337d104147f828d))
* **ui:** debugger results text overflow ([#1453](https://github.com/bucketeer-io/bucketeer/issues/1453)) ([cd8fe36](https://github.com/bucketeer-io/bucketeer/commit/cd8fe36303c704773962bf44b602e81d2446ad8e))
* **ui:** subscription not found when updating ([#1422](https://github.com/bucketeer-io/bucketeer/issues/1422)) ([44a5569](https://github.com/bucketeer-io/bucketeer/commit/44a55694beec589d3754863f5887f54ee82eedfc))
* update evaluation event counter metrics to include variation ID ([#1363](https://github.com/bucketeer-io/bucketeer/issues/1363)) ([e1488a8](https://github.com/bucketeer-io/bucketeer/commit/e1488a8e926b73d9cd550b3477835b110dfa066d))


### Miscellaneous

* add disabled field to list pushes api ([#1437](https://github.com/bucketeer-io/bucketeer/issues/1437)) ([89f864f](https://github.com/bucketeer-io/bucketeer/commit/89f864f97152e80481fddfb6d1bee1aca3c29cff))
* add environment id and name to notification and push api  ([#1416](https://github.com/bucketeer-io/bucketeer/issues/1416)) ([3fe31b4](https://github.com/bucketeer-io/bucketeer/commit/3fe31b41bb5191da880713024e509fcce49f3901))
* add environment_id label to evaluation event metrics ([#1391](https://github.com/bucketeer-io/bucketeer/issues/1391)) ([ffe8c83](https://github.com/bucketeer-io/bucketeer/commit/ffe8c8306ce8aa4a41c1703ed91ef6c858c56682))
* add environment_id to push proto ([#1412](https://github.com/bucketeer-io/bucketeer/issues/1412)) ([1147d6f](https://github.com/bucketeer-io/bucketeer/commit/1147d6fbbfe257889b5055954fd1df79196734a8))
* add linter to ensure lisence header ([#1393](https://github.com/bucketeer-io/bucketeer/issues/1393)) ([53bb294](https://github.com/bucketeer-io/bucketeer/commit/53bb2945bb56907c6ba875ae97d6b851a63acd06))
* add list all environment tags storage interface ([#1467](https://github.com/bucketeer-io/bucketeer/issues/1467)) ([44af5b2](https://github.com/bucketeer-io/bucketeer/commit/44af5b25918fb132e5061faa7daf8fdc680b5b06))
* add log for missing api key in the cache ([#1377](https://github.com/bucketeer-io/bucketeer/issues/1377)) ([ff14e70](https://github.com/bucketeer-io/bucketeer/commit/ff14e7001f06c56deab8722885edad2b3bdac464))
* add order by feature_ids in segment list api ([#1449](https://github.com/bucketeer-io/bucketeer/issues/1449)) ([4368469](https://github.com/bucketeer-io/bucketeer/commit/4368469f7be427e4326b160b7bf1d6426121c16e))
* add order by users in segment list api ([#1450](https://github.com/bucketeer-io/bucketeer/issues/1450)) ([cfe76a0](https://github.com/bucketeer-io/bucketeer/commit/cfe76a065ca62a0ff6ab4d815f9e9af1ce4b51d2))
* add organization id to push list api ([#1424](https://github.com/bucketeer-io/bucketeer/issues/1424)) ([968c3c5](https://github.com/bucketeer-io/bucketeer/commit/968c3c5954b00cf2be56011546deaab05d5d9e88))
* add tags column to account table ([#1454](https://github.com/bucketeer-io/bucketeer/issues/1454)) ([d5aaa2b](https://github.com/bucketeer-io/bucketeer/commit/d5aaa2b2908932f2caa98a64a18957fef3841ef4))
* add tags field to account api proto file ([#1455](https://github.com/bucketeer-io/bucketeer/issues/1455)) ([42d1a7c](https://github.com/bucketeer-io/bucketeer/commit/42d1a7c685f295d636b46338193589ffeeae121d))
* add transaction support for redis pipeline ([#1367](https://github.com/bucketeer-io/bucketeer/issues/1367)) ([d387ee6](https://github.com/bucketeer-io/bucketeer/commit/d387ee6af632aa87a98f1c36203c4e457ad5e5a8))
* change environment_namespace variable name to environment_id ([#1457](https://github.com/bucketeer-io/bucketeer/issues/1457)) ([bc380eb](https://github.com/bucketeer-io/bucketeer/commit/bc380eb60dd49d857f85aebf7750447bb97dccf4))
* change MySQL collate to utf8mb4_general_ci ([#1382](https://github.com/bucketeer-io/bucketeer/issues/1382)) ([01b31d0](https://github.com/bucketeer-io/bucketeer/commit/01b31d0f1a0e9c4483308de4dc6a7d9b445c02ff))
* change MySQL collate to utf8mb4_general_ci ([#1385](https://github.com/bucketeer-io/bucketeer/issues/1385)) ([4874621](https://github.com/bucketeer-io/bucketeer/commit/48746218a2e01f998b9b18c158fd96c7dd507aa4))
* change update segment cache timeout to 1 minute ([#1370](https://github.com/bucketeer-io/bucketeer/issues/1370)) ([4c87ff6](https://github.com/bucketeer-io/bucketeer/commit/4c87ff6cfc82fe0e1e7098cbf9081ce10dab1d0a))
* create sync api key maintainer migration ([#1374](https://github.com/bucketeer-io/bucketeer/issues/1374)) ([831bbe2](https://github.com/bucketeer-io/bucketeer/commit/831bbe25ab501de364f3a8ad11416d7ba358364b))
* implement tag name ([#1438](https://github.com/bucketeer-io/bucketeer/issues/1438)) ([62a7635](https://github.com/bucketeer-io/bucketeer/commit/62a7635eadc864ddc28434f356da748492510234))
* remove environment_namesapce column from db ([#1444](https://github.com/bucketeer-io/bucketeer/issues/1444)) ([8026527](https://github.com/bucketeer-io/bucketeer/commit/8026527c500e31e932fe5355378d03755e881f8c))
* remove grpc logging ([#1419](https://github.com/bucketeer-io/bucketeer/issues/1419)) ([a6fe791](https://github.com/bucketeer-io/bucketeer/commit/a6fe791b6cf7c44145442c08233690da0a1f44b9))
* remove mau table alter sql in migration ([#1458](https://github.com/bucketeer-io/bucketeer/issues/1458)) ([c0172bf](https://github.com/bucketeer-io/bucketeer/commit/c0172bf69b827aa0cef57334ef0860dc476221eb))
* remove old account table ([#1390](https://github.com/bucketeer-io/bucketeer/issues/1390)) ([bab9b93](https://github.com/bucketeer-io/bucketeer/commit/bab9b9357770d41c1cbfced556bd892273ab365b))
* remove unnecessary logs ([#1415](https://github.com/bucketeer-io/bucketeer/issues/1415)) ([b4aaf97](https://github.com/bucketeer-io/bucketeer/commit/b4aaf971a0b31acf5042e5f10289eb54426b2574))
* rename pubsub processor struct ([#1389](https://github.com/bucketeer-io/bucketeer/issues/1389)) ([f333880](https://github.com/bucketeer-io/bucketeer/commit/f333880e64ccda0d783ddddfc9d8a22dcb40bcb5))
* **ui:** hide used tags from the tag list on the push page ([#1460](https://github.com/bucketeer-io/bucketeer/issues/1460)) ([fd26f0d](https://github.com/bucketeer-io/bucketeer/commit/fd26f0dc4b1d416d109d697f66af0ee1dc87614c))
* **ui:** remove tag validation when updating the flag settings ([#1465](https://github.com/bucketeer-io/bucketeer/issues/1465)) ([c3c58ee](https://github.com/bucketeer-io/bucketeer/commit/c3c58ee8c2317e505b4eb85ae87509f472eba967))
* update copyright 2025 ([#1407](https://github.com/bucketeer-io/bucketeer/issues/1407)) ([595b906](https://github.com/bucketeer-io/bucketeer/commit/595b90695196d0f3778e29cfb649fc517776ca66))


### Performance Improvements

* change to save user and event counts in one request ([#1369](https://github.com/bucketeer-io/bucketeer/issues/1369)) ([a576212](https://github.com/bucketeer-io/bucketeer/commit/a576212fe58eb045241bf89cc448bda7077e1e10))
* improve feature caching process ([#1399](https://github.com/bucketeer-io/bucketeer/issues/1399)) ([0709bbe](https://github.com/bucketeer-io/bucketeer/commit/0709bbe422d881b3fa1f684322ee0800f154efb4))
* improve get environment api key latency ([#1380](https://github.com/bucketeer-io/bucketeer/issues/1380)) ([d9d5895](https://github.com/bucketeer-io/bucketeer/commit/d9d589587cd6133389311b40b4a99e0dea6d1b4b))
* improve redis pfmerge when using redis cluster ([#1372](https://github.com/bucketeer-io/bucketeer/issues/1372)) ([ac36f93](https://github.com/bucketeer-io/bucketeer/commit/ac36f937a897b521e2bd2da2dfcf361753e9198f))
* update cache across goroutines to speed up caching ([#1398](https://github.com/bucketeer-io/bucketeer/issues/1398)) ([0905244](https://github.com/bucketeer-io/bucketeer/commit/09052449c319bf7d7affc92bbc6740d9f4eda223))


### Reverts

* change MySQL collate to utf8mb4_general_ci ([#1383](https://github.com/bucketeer-io/bucketeer/issues/1383)) ([9788305](https://github.com/bucketeer-io/bucketeer/commit/97883050020332bf6af083ce31f949e1c02e2e0f))
* change to save user and event counts in one request ([#1371](https://github.com/bucketeer-io/bucketeer/issues/1371)) ([2a84762](https://github.com/bucketeer-io/bucketeer/commit/2a847621cfe2ffdcc0bb346ebb0b6b7381293f72))


### Build System

* **deps:** bump golang.org/x/crypto from 0.26.0 to 0.31.0 ([#1431](https://github.com/bucketeer-io/bucketeer/issues/1431)) ([b6472fc](https://github.com/bucketeer-io/bucketeer/commit/b6472fc2d65448d639398047a31ff9dc4d8ef7c1))
* **deps:** bump golang.org/x/crypto in /hack/delete-e2e-data-mysql ([#1432](https://github.com/bucketeer-io/bucketeer/issues/1432)) ([c13ab51](https://github.com/bucketeer-io/bucketeer/commit/c13ab51b5554582eb2b2c10f193f7c8e6426ff54))
* **deps:** bump golang.org/x/net from 0.28.0 to 0.33.0 ([#1434](https://github.com/bucketeer-io/bucketeer/issues/1434)) ([aa13996](https://github.com/bucketeer-io/bucketeer/commit/aa1399622fba167d233da6dd48fd4fef898cbf6d))
* fix embed.go not found ([#1439](https://github.com/bucketeer-io/bucketeer/issues/1439)) ([c6ec057](https://github.com/bucketeer-io/bucketeer/commit/c6ec057afb39ffd4fcaf2e3fa554fb94bd7bc488))
* fix proto-all rule not working on local machine ([#1429](https://github.com/bucketeer-io/bucketeer/issues/1429)) ([a89f506](https://github.com/bucketeer-io/bucketeer/commit/a89f50643e8fd1c68feeac53d8f3b8ca2cdb24f2))
* fix ui/dashboard deleting necessary file ([#1446](https://github.com/bucketeer-io/bucketeer/issues/1446)) ([71a2fa3](https://github.com/bucketeer-io/bucketeer/commit/71a2fa3311eb3e315be87788c0315abde81244da))

## [1.1.0](https://github.com/bucketeer-io/bucketeer/compare/v1.0.0...v1.1.0) (2024-12-02)


### Features

* implement CreateAccountV2 and Update/Disable/Enable/Delete AccountV2 with no command support ([#1321](https://github.com/bucketeer-io/bucketeer/issues/1321)) ([9f1e6ca](https://github.com/bucketeer-io/bucketeer/commit/9f1e6cab49e676b00d1654ef70cde85b25a792bf))
* implement CreateAPIKey support no command, save extra api key and maintainer column ([#1344](https://github.com/bucketeer-io/bucketeer/issues/1344)) ([a785ed9](https://github.com/bucketeer-io/bucketeer/commit/a785ed97f2533a55ef6a93c22ed2aed840eea154))
* implement logic and api description for read public AccountV2 APIs ([#1333](https://github.com/bucketeer-io/bucketeer/issues/1333)) ([bf429a3](https://github.com/bucketeer-io/bucketeer/commit/bf429a367bb9e94cea9c235c0a1e0a671843fd11))
* implement public Push APIs and generate swagger definition document for push ([#1292](https://github.com/bucketeer-io/bucketeer/issues/1292)) ([2298421](https://github.com/bucketeer-io/bucketeer/commit/22984212d9d66096c95ffc516dbcab34b1a43d70))
* migrate environment_namespace to environment_id ([#1226](https://github.com/bucketeer-io/bucketeer/issues/1226)) ([d2251a5](https://github.com/bucketeer-io/bucketeer/commit/d2251a5072b9f282f43db0b00204457d6d1c0298))
* new update api-key API ([#1350](https://github.com/bucketeer-io/bucketeer/issues/1350)) ([f49e70f](https://github.com/bucketeer-io/bucketeer/commit/f49e70f3726eef51df48f2a918560d111a4b1248))
* **ui/dashboard:** implement api keys ui ([#1338](https://github.com/bucketeer-io/bucketeer/issues/1338)) ([3d4f5a2](https://github.com/bucketeer-io/bucketeer/commit/3d4f5a2c470a474ef50610c3870e97d1269216db))
* **ui/dashboard:** implement members ui ([#1326](https://github.com/bucketeer-io/bucketeer/issues/1326)) ([d6ed679](https://github.com/bucketeer-io/bucketeer/commit/d6ed6798051d1a5a4fe54c70f49f240ff92eafda))
* **ui:** implement confirm dialog ([#1318](https://github.com/bucketeer-io/bucketeer/issues/1318)) ([4de62d9](https://github.com/bucketeer-io/bucketeer/commit/4de62d9acaed64c644ad93cdcb4028bfeecda195))


### Bug Fixes

* batch svc not caching the api keys correctly ([#1354](https://github.com/bucketeer-io/bucketeer/issues/1354)) ([0acbb03](https://github.com/bucketeer-io/bucketeer/commit/0acbb0333fc667cce219843c78bd4d9338c82ed1))
* cannot create an account ([#1324](https://github.com/bucketeer-io/bucketeer/issues/1324)) ([c1b8d14](https://github.com/bucketeer-io/bucketeer/commit/c1b8d14bd02e20fc4c75eb3374e5c3fdc3be1e9e))
* evaluation event counter metrics is not registered ([#1353](https://github.com/bucketeer-io/bucketeer/issues/1353)) ([104ce58](https://github.com/bucketeer-io/bucketeer/commit/104ce58a6d8402f4137e5ab3915f3136c61300a7))
* feature not found error on evaluation ([#1360](https://github.com/bucketeer-io/bucketeer/issues/1360)) ([5113449](https://github.com/bucketeer-io/bucketeer/commit/5113449891b5205f502828b8b890db05c688ba44))
* use file io encoded_descriptor when replace encoded descriptor ([#1329](https://github.com/bucketeer-io/bucketeer/issues/1329)) ([10b9ab8](https://github.com/bucketeer-io/bucketeer/commit/10b9ab80332a1b4ce47cbb87c9bafca02ff777d6))


### Miscellaneous

* add api key token and maintainer ([#1342](https://github.com/bucketeer-io/bucketeer/issues/1342)) ([a3292c8](https://github.com/bucketeer-io/bucketeer/commit/a3292c8c21787c892730a97fad62c15c498816ce))
* add doc for manual atlas migration and populate api_key with values from id ([#1345](https://github.com/bucketeer-io/bucketeer/issues/1345)) ([b7dfb66](https://github.com/bucketeer-io/bucketeer/commit/b7dfb66f478335ef091e04a4f582f9c827a473f5))
* add enable option for batch and subscriber service charts ([#1327](https://github.com/bucketeer-io/bucketeer/issues/1327)) ([dd09cad](https://github.com/bucketeer-io/bucketeer/commit/dd09cada032c08c5fabbace7b746736d2093a1e3))
* add evaluation event count metrics to subscriber ([#1351](https://github.com/bucketeer-io/bucketeer/issues/1351)) ([6da6bd6](https://github.com/bucketeer-io/bucketeer/commit/6da6bd6eab290ccbaadfa4de69ee7b1683ae03f7))
* add logging features to batch flag cacher for debugging ([#1359](https://github.com/bucketeer-io/bucketeer/issues/1359)) ([36aadb9](https://github.com/bucketeer-io/bucketeer/commit/36aadb92e0434cfea25720c9c7610fee5a686d50))
* change user evaluations id to use feature updated at ([#1361](https://github.com/bucketeer-io/bucketeer/issues/1361)) ([3733b71](https://github.com/bucketeer-io/bucketeer/commit/3733b713bd268f5770f855ac9f2ed681954627e0))
* fix dev container mysql schema ([#1337](https://github.com/bucketeer-io/bucketeer/issues/1337)) ([d64e06f](https://github.com/bucketeer-io/bucketeer/commit/d64e06fe2d3299121009513aae96f29a31979f69))
* remove publish user event from api svc ([#1336](https://github.com/bucketeer-io/bucketeer/issues/1336)) ([5c4ff75](https://github.com/bucketeer-io/bucketeer/commit/5c4ff75588607346f6dec05ec6907f6b29a6c566))
* set default value for environment_namespace column ([#1330](https://github.com/bucketeer-io/bucketeer/issues/1330)) ([a200202](https://github.com/bucketeer-io/bucketeer/commit/a2002026a49fc209acd44158de294f715a18ef16))
* **ui:** show search filter only once ([#1323](https://github.com/bucketeer-io/bucketeer/issues/1323)) ([382a56c](https://github.com/bucketeer-io/bucketeer/commit/382a56cebde60c1ccb0d3ccc2b29897849741db8))
* update account api permission check ([#1335](https://github.com/bucketeer-io/bucketeer/issues/1335)) ([29c8256](https://github.com/bucketeer-io/bucketeer/commit/29c82561b728de235c8e8b1eb6b6cf4a957c0411))


### Build System

* **deps:** bump the dependencies group with 2 updates ([#1314](https://github.com/bucketeer-io/bucketeer/issues/1314)) ([a812032](https://github.com/bucketeer-io/bucketeer/commit/a812032d061fd31498b454f8323fc27ce015b5bc))

## [1.0.0](https://github.com/bucketeer-io/bucketeer/compare/v0.4.9...v1.0.0) (2024-11-01)


### Features

* add new order by clauses for list accounts api ([#1312](https://github.com/bucketeer-io/bucketeer/issues/1312)) ([95aa13c](https://github.com/bucketeer-io/bucketeer/commit/95aa13c3aa4eb3021bcaea450c3c003ab987b360))
* implement update push API support no command and deprecate command in delete push API ([#1298](https://github.com/bucketeer-io/bucketeer/issues/1298)) ([2199576](https://github.com/bucketeer-io/bucketeer/commit/21995762569c72d6a21e6aa8601eda12c53a3ef1))
* save user info from google ([#1254](https://github.com/bucketeer-io/bucketeer/issues/1254)) ([898a084](https://github.com/bucketeer-io/bucketeer/commit/898a084477f1604b2631d0e0ba09b64f196b998f))
* **ui:** add new project dashboard ([#1306](https://github.com/bucketeer-io/bucketeer/issues/1306)) ([f6a5946](https://github.com/bucketeer-io/bucketeer/commit/f6a594602b6fbf776387928565cc6d65f24b8838))
* **ui:** project details and environments dashbaord ([#1313](https://github.com/bucketeer-io/bucketeer/issues/1313)) ([67be248](https://github.com/bucketeer-io/bucketeer/commit/67be2488977d243f1f5a6288ea1aaabd2973fe09))


### Bug Fixes

* a member cannot see the organization details ([#1311](https://github.com/bucketeer-io/bucketeer/issues/1311)) ([d354f69](https://github.com/bucketeer-io/bucketeer/commit/d354f6980914339a13ff2ecf53bfdebecdf55abd))
* err is nil when the flag is not found in the update feature api ([7fa2280](https://github.com/bucketeer-io/bucketeer/commit/7fa22802f8fc0470e62898cb1a275c9351c16353))
* owner organization role not being updated ([#1303](https://github.com/bucketeer-io/bucketeer/issues/1303)) ([96622e5](https://github.com/bucketeer-io/bucketeer/commit/96622e51647f820c1fd53b105314bcb06acc5204))


### Miscellaneous

* change create project api to support the new console ([#1308](https://github.com/bucketeer-io/bucketeer/issues/1308)) ([3100929](https://github.com/bucketeer-io/bucketeer/commit/310092915dd9b1acbe3ae30fbd6adf65cdc911c8))
* update organization api permission check for owner role ([#1310](https://github.com/bucketeer-io/bucketeer/issues/1310)) ([8bb46c1](https://github.com/bucketeer-io/bucketeer/commit/8bb46c1f2d610203ec7709bde8587256a263872c))

## [0.4.9](https://github.com/bucketeer-io/bucketeer/compare/v0.4.8...v0.4.9) (2024-10-28)


### Features

* add flag count for project API ([#1246](https://github.com/bucketeer-io/bucketeer/issues/1246)) ([d1da171](https://github.com/bucketeer-io/bucketeer/commit/d1da1714851e6439123b175e723a40e3e067fadd))
* add organization creator email ([#1255](https://github.com/bucketeer-io/bucketeer/issues/1255)) ([c8dc8f7](https://github.com/bucketeer-io/bucketeer/commit/c8dc8f70457f7dcfb732a755162a82e21b300430))
* add project environement and user count organization list API ([#1244](https://github.com/bucketeer-io/bucketeer/issues/1244)) ([d6cb3d6](https://github.com/bucketeer-io/bucketeer/commit/d6cb3d6befe5db194e40e011fb7910bb043f74f9))
* add redis copy hack script ([#1269](https://github.com/bucketeer-io/bucketeer/issues/1269)) ([cc0b874](https://github.com/bucketeer-io/bucketeer/commit/cc0b874f183613007321687fdd89095ef80ec458))
* implement file server for v3 dashboard ([#1295](https://github.com/bucketeer-io/bucketeer/issues/1295)) ([6448663](https://github.com/bucketeer-io/bucketeer/commit/64486633aa65d835e96744306dbcd96bcdc665b8))
* save search filter options ([#1231](https://github.com/bucketeer-io/bucketeer/issues/1231)) ([f24d53a](https://github.com/bucketeer-io/bucketeer/commit/f24d53a2f3f330300b518c9960d17ed47223e274))
* support non-command for web create Push API ([#1289](https://github.com/bucketeer-io/bucketeer/issues/1289)) ([58d7287](https://github.com/bucketeer-io/bucketeer/commit/58d7287afecc6f3ea8aeed9f13a99bf921660d98))
* support redis cluster ([#1268](https://github.com/bucketeer-io/bucketeer/issues/1268)) ([4c1ce3e](https://github.com/bucketeer-io/bucketeer/commit/4c1ce3ec07074bcbb099ee66688a219164d0a39d))
* **ui:** add a temporary route rule for v3 console ([#1296](https://github.com/bucketeer-io/bucketeer/issues/1296)) ([4bfc1b7](https://github.com/bucketeer-io/bucketeer/commit/4bfc1b7253f778459ba67ae9fe1e226655f78acd))
* **ui:** debugger feature ([#1233](https://github.com/bucketeer-io/bucketeer/issues/1233)) ([09d18f5](https://github.com/bucketeer-io/bucketeer/commit/09d18f5d296a4a38f88bc6308a4f0b46b3ef515d))
* **ui:** organization dashboard ([#1286](https://github.com/bucketeer-io/bucketeer/issues/1286)) ([348c914](https://github.com/bucketeer-io/bucketeer/commit/348c9146fc3147f07ac2cdcf03dce0d126db1c2c))


### Bug Fixes

* audit log pubg message not being acknowledged ([#1279](https://github.com/bucketeer-io/bucketeer/issues/1279)) ([6a2dc67](https://github.com/bucketeer-io/bucketeer/commit/6a2dc67606e88c996ada4de9132a37c84bd5683b))
* nil pointer when the pubsub puller creation failed ([#1278](https://github.com/bucketeer-io/bucketeer/issues/1278)) ([a5d1c8b](https://github.com/bucketeer-io/bucketeer/commit/a5d1c8ba5975cecd6ce7719ab8bcf96937305b09))
* organiztion API ([#1261](https://github.com/bucketeer-io/bucketeer/issues/1261)) ([50e1d1c](https://github.com/bucketeer-io/bucketeer/commit/50e1d1c769f994a3b7aaef46f2b801419c6bd73b))
* panic when checking register event request ([#1277](https://github.com/bucketeer-io/bucketeer/issues/1277)) ([6616f54](https://github.com/bucketeer-io/bucketeer/commit/6616f5489e462d0398d5eb9059078da3b5c5babb))
* redis cluster pfmerge ([#1281](https://github.com/bucketeer-io/bucketeer/issues/1281)) ([719f78f](https://github.com/bucketeer-io/bucketeer/commit/719f78fe4220d1d45d10677e97b4114635d28fdc))
* **ui:** save filter popup being shown upon re-login ([#1288](https://github.com/bucketeer-io/bucketeer/issues/1288)) ([f9076d7](https://github.com/bucketeer-io/bucketeer/commit/f9076d7ee630890869fb90f3499c5b3af5c56ea0))
* **ui:** show save filter popup while navigating to the targeting page ([#1282](https://github.com/bucketeer-io/bucketeer/issues/1282)) ([6fb9a96](https://github.com/bucketeer-io/bucketeer/commit/6fb9a9616cafe9fbd56d88a4a0d5eebb27329285))
* **ui:** unable to create boolean type feature flag ([#1247](https://github.com/bucketeer-io/bucketeer/issues/1247)) ([ff1b300](https://github.com/bucketeer-io/bucketeer/commit/ff1b300da2e26c7fe1515289e96f83401abc4b43))
* **ui:** unsaved search filters popup being shown when logging in ([#1263](https://github.com/bucketeer-io/bucketeer/issues/1263)) ([6a8bb86](https://github.com/bucketeer-io/bucketeer/commit/6a8bb862d9d03c1a461dfde38d4108c21125bf7f))


### Miscellaneous

* add list projects v2 for the new console ([#1267](https://github.com/bucketeer-io/bucketeer/issues/1267)) ([36dd128](https://github.com/bucketeer-io/bucketeer/commit/36dd128227160d7b7764e33b9141cfdb545e4430))
* add log for error metrics from sdk client ([#1270](https://github.com/bucketeer-io/bucketeer/issues/1270)) ([c6d3521](https://github.com/bucketeer-io/bucketeer/commit/c6d3521a2174b6eb5d90565359338c4516d7a545))
* add make cmd to delete dev container mysql data ([#1293](https://github.com/bucketeer-io/bucketeer/issues/1293)) ([a526aca](https://github.com/bucketeer-io/bucketeer/commit/a526acaf2a65a2621f418fb121d36f1c876780e7))
* add organization_id to project unique key ([#1302](https://github.com/bucketeer-io/bucketeer/issues/1302)) ([7c15b95](https://github.com/bucketeer-io/bucketeer/commit/7c15b954c10275052e2ddf80f4b4256f8f1390b0))
* change create organization api to create default environment ([#1297](https://github.com/bucketeer-io/bucketeer/issues/1297)) ([0a6cfd4](https://github.com/bucketeer-io/bucketeer/commit/0a6cfd40c8c6d4de57be11e947d4f8f4877fcaff))
* change the default time range when getting evaluation count to 7 days ([#1283](https://github.com/bucketeer-io/bucketeer/issues/1283)) ([e5bb28c](https://github.com/bucketeer-io/bucketeer/commit/e5bb28c83e19b19457be118cfdea47796a5edb2f))
* get key slot when using redis cluster ([#1273](https://github.com/bucketeer-io/bucketeer/issues/1273)) ([3cce246](https://github.com/bucketeer-io/bucketeer/commit/3cce2465a2124108bc94996f8b214b654ab8c1a2))
* remove order by clause from count sql ([#1262](https://github.com/bucketeer-io/bucketeer/issues/1262)) ([d3a2867](https://github.com/bucketeer-io/bucketeer/commit/d3a28675a562dc82acdb5dd340f1736a21954f84))
* remove redis pipeline command usage ([#1271](https://github.com/bucketeer-io/bucketeer/issues/1271)) ([b3f3667](https://github.com/bucketeer-io/bucketeer/commit/b3f36670cd7467dc877590b62362f31b26e39918))
* stop error logging when checking register event request for debugging ([#1276](https://github.com/bucketeer-io/bucketeer/issues/1276)) ([628f888](https://github.com/bucketeer-io/bucketeer/commit/628f88837dcf6a4e01af622914f2c252b80b8595))
* support gcp multi cluster ingress ([#1198](https://github.com/bucketeer-io/bucketeer/issues/1198)) ([ce278c5](https://github.com/bucketeer-io/bucketeer/commit/ce278c51660ed513e8d51ab3e9856c4fab879141))
* update delete e2e image tag ([#1274](https://github.com/bucketeer-io/bucketeer/issues/1274)) ([c8fedff](https://github.com/bucketeer-io/bucketeer/commit/c8fedff3a97f36365b6e55c81507265470895563))
* update dev container feature version ([#1294](https://github.com/bucketeer-io/bucketeer/issues/1294)) ([ed20f93](https://github.com/bucketeer-io/bucketeer/commit/ed20f934ec176a007d4e1e4df0744db7157e14aa))
* update dev container node version ([#1301](https://github.com/bucketeer-io/bucketeer/issues/1301)) ([ca77fc0](https://github.com/bucketeer-io/bucketeer/commit/ca77fc07f965b6668fd71fd35159be78caac2482))
* updgrade go version in devcontainer ([#1287](https://github.com/bucketeer-io/bucketeer/issues/1287)) ([5e20c9a](https://github.com/bucketeer-io/bucketeer/commit/5e20c9a9c9830553cee2c57a38d6b937db9cc9f7))


### Build System

* **deps-dev:** bump vite from 5.4.2 to 5.4.6 in /ui/dashboard ([#1241](https://github.com/bucketeer-io/bucketeer/issues/1241)) ([25883c3](https://github.com/bucketeer-io/bucketeer/commit/25883c301f9094a9c2ba6f8245af33bda0370dbe))
* **deps:** bump express from 4.19.2 to 4.21.0 in /ui/web-v2 ([#1242](https://github.com/bucketeer-io/bucketeer/issues/1242)) ([ca100b2](https://github.com/bucketeer-io/bucketeer/commit/ca100b263546acf25b7fe82da6dc2f0dcc9eebd1))
* **deps:** bump rollup from 4.21.2 to 4.22.4 in /ui/dashboard ([#1256](https://github.com/bucketeer-io/bucketeer/issues/1256)) ([fa6d61c](https://github.com/bucketeer-io/bucketeer/commit/fa6d61c58f6e21be628487c6c0c292b799ab689e))
* **deps:** bump the dependencies group across 1 directory with 20 updates ([#1265](https://github.com/bucketeer-io/bucketeer/issues/1265)) ([fd01afc](https://github.com/bucketeer-io/bucketeer/commit/fd01afc1a7bc87751e14056e8c2d411ab5ac8827))

## [0.4.8](https://github.com/bucketeer-io/bucketeer/compare/v0.4.7...v0.4.8) (2024-09-17)


### Features

* add CreateSearchFilter API ([#1210](https://github.com/bucketeer-io/bucketeer/issues/1210)) ([6400856](https://github.com/bucketeer-io/bucketeer/commit/6400856428794497dc5ce2c3ecd86bf668938887))
* add DeleteSearchFilter API  ([#1227](https://github.com/bucketeer-io/bucketeer/issues/1227)) ([fed6f9d](https://github.com/bucketeer-io/bucketeer/commit/fed6f9da2face5545ffb93d995e2459f298e301c))
* add UpdateSearchFilter API ([#1214](https://github.com/bucketeer-io/bucketeer/issues/1214)) ([08205bc](https://github.com/bucketeer-io/bucketeer/commit/08205bc22a0a3792825aa6e6d93be4d6a7c82467))
* **ui/dashboard:** add my projects menu ([#1229](https://github.com/bucketeer-io/bucketeer/issues/1229)) ([39f20bd](https://github.com/bucketeer-io/bucketeer/commit/39f20bdc030a0095ee0b908b259ab54eb507ba98))
* **ui/dashboard:** implement auth flow ([#1215](https://github.com/bucketeer-io/bucketeer/issues/1215)) ([78cbfba](https://github.com/bucketeer-io/bucketeer/commit/78cbfba052cc0af75013d1c68032349c78a1c721))


### Bug Fixes

* column 'id' in where clause is ambiguous when searching flag ([#1234](https://github.com/bucketeer-io/bucketeer/issues/1234)) ([abab6d2](https://github.com/bucketeer-io/bucketeer/commit/abab6d267f001e38539724a9a930695c5ef4017e))
* missing search filter field in the get me api ([#1228](https://github.com/bucketeer-io/bucketeer/issues/1228)) ([5d582ab](https://github.com/bucketeer-io/bucketeer/commit/5d582ab0984bc207b50c5e0eed6f2b3121ec1dbc))
* system admin search filter not being updated ([#1235](https://github.com/bucketeer-io/bucketeer/issues/1235)) ([d959edc](https://github.com/bucketeer-io/bucketeer/commit/d959edcddc89038f3374b0264278f3590e3b3ee0))


### Miscellaneous

* move evaluation pkg to go directory ([#1238](https://github.com/bucketeer-io/bucketeer/issues/1238)) ([05363ef](https://github.com/bucketeer-io/bucketeer/commit/05363efcb486454608347b772e86b16a499e0975))
* unify duplicate openapi default settings into a single file ([#1216](https://github.com/bucketeer-io/bucketeer/issues/1216)) ([82d4b73](https://github.com/bucketeer-io/bucketeer/commit/82d4b73e8fae43942d2dd054a4ed9a14d18f8a3d))
* using configured stan modelId ([#1237](https://github.com/bucketeer-io/bucketeer/issues/1237)) ([b23df7c](https://github.com/bucketeer-io/bucketeer/commit/b23df7cb2dc8e0e560cfc9c3bb0062d41c6494b5))


### Build System

* **deps-dev:** bump webpack from 5.92.0 to 5.94.0 in /ui/web-v2 ([#1219](https://github.com/bucketeer-io/bucketeer/issues/1219)) ([fc855e7](https://github.com/bucketeer-io/bucketeer/commit/fc855e756a34e19191519e4735acbc77d667b7e4))
* **deps:** bump micromatch from 4.0.7 to 4.0.8 in /ui/dashboard ([#1220](https://github.com/bucketeer-io/bucketeer/issues/1220)) ([7bbba20](https://github.com/bucketeer-io/bucketeer/commit/7bbba20eba0480a476f68b9824eb433fd2392752))
* **deps:** bump micromatch from 4.0.7 to 4.0.8 in /ui/web-v2 ([#1221](https://github.com/bucketeer-io/bucketeer/issues/1221)) ([fd80067](https://github.com/bucketeer-io/bucketeer/commit/fd8006712163bbab9f4bfcd696ff51e3a01963a9))
* **deps:** bump the dependencies group with 3 updates ([#1223](https://github.com/bucketeer-io/bucketeer/issues/1223)) ([56975a3](https://github.com/bucketeer-io/bucketeer/commit/56975a3f7d94fb9f0b6fc98b50ff8ed82d27dae5))

## [0.4.7](https://github.com/bucketeer-io/bucketeer/compare/v0.4.6...v0.4.7) (2024-08-27)


### Features

* add proto and domain for search filter ([#1197](https://github.com/bucketeer-io/bucketeer/issues/1197)) ([03e5580](https://github.com/bucketeer-io/bucketeer/commit/03e55800f29a8ec091b881a3e84e42f27a11bb2d))
* add support for storage as SearchFilter ([#1205](https://github.com/bucketeer-io/bucketeer/issues/1205)) ([fa7632e](https://github.com/bucketeer-io/bucketeer/commit/fa7632ea9fe3d8238d9a3346d8970fd11a33d687))
* allows to define rules that are enabled when a given value is a partial match to a target attribute ([#1187](https://github.com/bucketeer-io/bucketeer/issues/1187)) ([fe4b9c8](https://github.com/bucketeer-io/bucketeer/commit/fe4b9c8403e82d798519a81223dc560355e9a435))
* fcm service account upload in create push ([#1208](https://github.com/bucketeer-io/bucketeer/issues/1208)) ([1485398](https://github.com/bucketeer-io/bucketeer/commit/14853988d22a8a0107c066010029f4c983d2166c))
* move experiment calculator to batch service ([#1160](https://github.com/bucketeer-io/bucketeer/issues/1160)) ([238b390](https://github.com/bucketeer-io/bucketeer/commit/238b39083692837475f9d39e1959cda12ab2d0e8))
* **ui:** new dashboard strutcure ([#1123](https://github.com/bucketeer-io/bucketeer/issues/1123)) ([31f03c2](https://github.com/bucketeer-io/bucketeer/commit/31f03c2742d23146e7b78881fcc988af48766190))
* **ui:** support multi scheduling in the auto operations ([#1143](https://github.com/bucketeer-io/bucketeer/issues/1143)) ([328b162](https://github.com/bucketeer-io/bucketeer/commit/328b162aa60035e242221df9902c298d0c95c106))


### Bug Fixes

* fixed to also check ActionType when validating the same date ([#1191](https://github.com/bucketeer-io/bucketeer/issues/1191)) ([88c627b](https://github.com/bucketeer-io/bucketeer/commit/88c627b461111214211ecaeadca5fbee8dee9b1a))
* go building ([#1163](https://github.com/bucketeer-io/bucketeer/issues/1163)) ([6ae76a7](https://github.com/bucketeer-io/bucketeer/commit/6ae76a7543ed5b14d45b0e5090ee07b9e20ff100))
* missing rule path when deploying ([c5050a5](https://github.com/bucketeer-io/bucketeer/commit/c5050a550e3a98be97d6b4659a9b8824401dadd1))
* ops event rate not being processed ([#1164](https://github.com/bucketeer-io/bucketeer/issues/1164)) ([835ef0a](https://github.com/bucketeer-io/bucketeer/commit/835ef0adfedb3f813e11d7305b9d3d5b4f70f052))
* pubsub message not being acknowledged when the reason is nil ([#1169](https://github.com/bucketeer-io/bucketeer/issues/1169)) ([dd4c878](https://github.com/bucketeer-io/bucketeer/commit/dd4c878e49a5f04dfc155193880842d4f873ca86))
* sql argument when getting account ([#1213](https://github.com/bucketeer-io/bucketeer/issues/1213)) ([bc767aa](https://github.com/bucketeer-io/bucketeer/commit/bc767aaadf7dc6309b201d15fe2c269b82d93eaf))
* subscriber metric name ([#1186](https://github.com/bucketeer-io/bucketeer/issues/1186)) ([2385042](https://github.com/bucketeer-io/bucketeer/commit/23850423860432ac275de2d0bb0b72f139075742))
* **ui:** auto operation action type not being set ([#1162](https://github.com/bucketeer-io/bucketeer/issues/1162)) ([3e8c3c8](https://github.com/bucketeer-io/bucketeer/commit/3e8c3c8980c46e6dfb7534ee3f6db713815a9128))
* **ui:** auto operation count ([#1159](https://github.com/bucketeer-io/bucketeer/issues/1159)) ([ee3c134](https://github.com/bucketeer-io/bucketeer/commit/ee3c1343ff5da1b7b7235d9dc28ab01eaa82a38b))
* unimplemented api errror in the subscriber svc ([#1202](https://github.com/bucketeer-io/bucketeer/issues/1202)) ([a049738](https://github.com/bucketeer-io/bucketeer/commit/a049738337a6308a88aaa3575065174fb161d9fc))
* validate unknown action type ([#1161](https://github.com/bucketeer-io/bucketeer/issues/1161)) ([93541f4](https://github.com/bucketeer-io/bucketeer/commit/93541f4d4503fdec771a2a131e5209f72d758c69))
* validated the same date for schedule Auto Ops ([#1171](https://github.com/bucketeer-io/bucketeer/issues/1171)) ([63ab2f7](https://github.com/bucketeer-io/bucketeer/commit/63ab2f7e3b3fdf47889d96e9788002ae5c1957eb))


### Miscellaneous

* add authentication documentation ([#1149](https://github.com/bucketeer-io/bucketeer/issues/1149)) ([f2af674](https://github.com/bucketeer-io/bucketeer/commit/f2af674c66874a9130502b6843117bf7ecb160f5))
* add docs for account get me api ([#1212](https://github.com/bucketeer-io/bucketeer/issues/1212)) ([f36a52e](https://github.com/bucketeer-io/bucketeer/commit/f36a52ede4dfdd394350e1ce5489e3b266a63ab7))
* add documentation for web account amd environment services ([#1211](https://github.com/bucketeer-io/bucketeer/issues/1211)) ([f253084](https://github.com/bucketeer-io/bucketeer/commit/f253084116f0a7128b7f779cf11d9d47748c8927))
* add environment_id column for tables ([#1209](https://github.com/bucketeer-io/bucketeer/issues/1209)) ([0f6d1fb](https://github.com/bucketeer-io/bucketeer/commit/0f6d1fbfed3c015c266ec40a246d746dd36e2b87))
* add error logs for push sender ([#1201](https://github.com/bucketeer-io/bucketeer/issues/1201)) ([096fad6](https://github.com/bucketeer-io/bucketeer/commit/096fad6d195f00b5095ab4f6a504d6e7bad94dda))
* add fcm service account field ([#1206](https://github.com/bucketeer-io/bucketeer/issues/1206)) ([3a271cf](https://github.com/bucketeer-io/bucketeer/commit/3a271cf2a5aec5ebe72a5cd785ba39a2cf635946))
* change envoy load balancer to least_request ([#1153](https://github.com/bucketeer-io/bucketeer/issues/1153)) ([66597f4](https://github.com/bucketeer-io/bucketeer/commit/66597f4a2f2ae4f8f243ff7aeffbd0aa16041c8b))
* delete deprecated OpsType and ChangeAutoOpsRuleOpsTypeCommand ([#1204](https://github.com/bucketeer-io/bucketeer/issues/1204)) ([c8b4fec](https://github.com/bucketeer-io/bucketeer/commit/c8b4fecea2912f7132c9d1c087f979cb629bc739))
* delete docker building cache when open dev container ([#1158](https://github.com/bucketeer-io/bucketeer/issues/1158)) ([72415b4](https://github.com/bucketeer-io/bucketeer/commit/72415b4cf4535c26383436a115ce607bb372bac6))
* delete triggered_at column ([#1196](https://github.com/bucketeer-io/bucketeer/issues/1196)) ([b76684a](https://github.com/bucketeer-io/bucketeer/commit/b76684aa361f0ea48121620e5e3886289bd43285))
* delete triggeredAt for AutoOps ([#1179](https://github.com/bucketeer-io/bucketeer/issues/1179)) ([3df9296](https://github.com/bucketeer-io/bucketeer/commit/3df9296d8ec62ea229fc4d71f9b18118dc7541a2))
* ensure that all kubectl commands for the dev container run in the minikube only ([#1165](https://github.com/bucketeer-io/bucketeer/issues/1165)) ([57c829f](https://github.com/bucketeer-io/bucketeer/commit/57c829fb859e71f3bcef2827776e67c37c2570a5))
* ignore context canceled errors when publishing to pubsub ([#1185](https://github.com/bucketeer-io/bucketeer/issues/1185)) ([14454f3](https://github.com/bucketeer-io/bucketeer/commit/14454f3a8d65e7a66aa89ab89acbf14bf50f189c))
* migrated account_v2 table to add search_filters ([#1199](https://github.com/bucketeer-io/bucketeer/issues/1199)) ([c93d7a8](https://github.com/bucketeer-io/bucketeer/commit/c93d7a8b7d8f7ec0fecb6db74fa1fe611ecda053))
* **migration:** include atlas schema migration table to initilization file ([#1193](https://github.com/bucketeer-io/bucketeer/issues/1193)) ([251783b](https://github.com/bucketeer-io/bucketeer/commit/251783b409598821cb161e1d049828b2c7db6edd))
* **migration:** set default value for triggered_at column ([#1194](https://github.com/bucketeer-io/bucketeer/issues/1194)) ([a460fa2](https://github.com/bucketeer-io/bucketeer/commit/a460fa2d783ffc2d5b6a86c830f2dd140ab5b948))
* move subscribers to subscriber svc ([#1168](https://github.com/bucketeer-io/bucketeer/issues/1168)) ([d97f383](https://github.com/bucketeer-io/bucketeer/commit/d97f383c70422b6ebd180d2d9233b8d85031aa46))
* rename api-gateway to api ([#1190](https://github.com/bucketeer-io/bucketeer/issues/1190)) ([19d2d5a](https://github.com/bucketeer-io/bucketeer/commit/19d2d5a01ede60f07a53462e398c2ea3f657e51c))
* unify web-gateway and backend ([#1181](https://github.com/bucketeer-io/bucketeer/issues/1181)) ([62e3b1b](https://github.com/bucketeer-io/bucketeer/commit/62e3b1bba75377f730df6bd346bc2b4f1edaa949))
* update prd envoy to 1.31.0 ([#1155](https://github.com/bucketeer-io/bucketeer/issues/1155)) ([7c458ff](https://github.com/bucketeer-io/bucketeer/commit/7c458ff8fb4a2082467e540e230e075a413fffa8))


### Build System

* **deps-dev:** bump postcss from 8.4.24 to 8.4.31 in /ui/web-v2 ([#1174](https://github.com/bucketeer-io/bucketeer/issues/1174)) ([9bff6c5](https://github.com/bucketeer-io/bucketeer/commit/9bff6c53207bde0c6fda0fc16b5f4ae533047c17))
* **deps:** bump github.com/hashicorp/go-retryablehttp ([#1175](https://github.com/bucketeer-io/bucketeer/issues/1175)) ([a6b14a0](https://github.com/bucketeer-io/bucketeer/commit/a6b14a0e07bf85e7ea8b6ee4b18a87aebbb28ecc))
* **deps:** bump golang.org/x/crypto in /hack/delete-e2e-data-mysql ([#1178](https://github.com/bucketeer-io/bucketeer/issues/1178)) ([02d047e](https://github.com/bucketeer-io/bucketeer/commit/02d047e64bfadefec39e7cf0b88df48a7938024a))
* **deps:** bump golang.org/x/net in /hack/delete-e2e-data-mysql ([#1177](https://github.com/bucketeer-io/bucketeer/issues/1177)) ([ce055a0](https://github.com/bucketeer-io/bucketeer/commit/ce055a0b01da58038d16866d0eb7b7d27e16f00a))
* **deps:** bump google.golang.org/protobuf ([#1176](https://github.com/bucketeer-io/bucketeer/issues/1176)) ([0aefd14](https://github.com/bucketeer-io/bucketeer/commit/0aefd14ff5485ef4cc1f98476bdd05435899f5d4))
* **deps:** bump the dependencies group with 14 updates ([#1173](https://github.com/bucketeer-io/bucketeer/issues/1173)) ([cbed675](https://github.com/bucketeer-io/bucketeer/commit/cbed67563f93ecf37d76208675af0ea96b1756c6))
* **deps:** bump the dependencies group with 3 updates ([#1172](https://github.com/bucketeer-io/bucketeer/issues/1172)) ([5390bc0](https://github.com/bucketeer-io/bucketeer/commit/5390bc0cd1e71060b72478e21881f3c505508030))
* **deps:** bump the dependencies group with 4 updates ([#1183](https://github.com/bucketeer-io/bucketeer/issues/1183)) ([34d8f33](https://github.com/bucketeer-io/bucketeer/commit/34d8f338ea522a255727a3212caaee8281b25c0e))
* **deps:** update package.json ([#1182](https://github.com/bucketeer-io/bucketeer/issues/1182)) ([4470ad2](https://github.com/bucketeer-io/bucketeer/commit/4470ad2751d2beadee3bac1e42c8697d16dcb32e))
* **ui:** add post build script to recreate the file after building web project ([#1166](https://github.com/bucketeer-io/bucketeer/issues/1166)) ([41da191](https://github.com/bucketeer-io/bucketeer/commit/41da1916100bf29cc925010b629f74c17e014d5f))

## [0.4.6](https://github.com/bucketeer-io/bucketeer/compare/v0.4.5...v0.4.6) (2024-07-23)


### Features

* add create features to public api ([#1055](https://github.com/bucketeer-io/bucketeer/issues/1055)) ([a9bb720](https://github.com/bucketeer-io/bucketeer/commit/a9bb720c3d130fa1824d69c3744949486ee83d12))
* add entity data to auditlog ([#1108](https://github.com/bucketeer-io/bucketeer/issues/1108)) ([3d7bff3](https://github.com/bucketeer-io/bucketeer/commit/3d7bff32343551b352c568caf5a473d53608ee66))
* add get feature to public API ([#1012](https://github.com/bucketeer-io/bucketeer/issues/1012)) ([92537f5](https://github.com/bucketeer-io/bucketeer/commit/92537f5dec86b3d5819edc61edf59569996e23e3))
* add list features to public api  ([#1041](https://github.com/bucketeer-io/bucketeer/issues/1041)) ([d2ad23f](https://github.com/bucketeer-io/bucketeer/commit/d2ad23fc20c6246c912f150cc0224bdb6ef45504))
* add stop Api for AutoOps ([#1058](https://github.com/bucketeer-io/bucketeer/issues/1058)) ([e5e0d3e](https://github.com/bucketeer-io/bucketeer/commit/e5e0d3e69b844de044ae3bf8f842be32ec65c3c9))
* automate db migration ([#1060](https://github.com/bucketeer-io/bucketeer/issues/1060)) ([b2056f8](https://github.com/bucketeer-io/bucketeer/commit/b2056f8eb29b93b8e46adf2b8d190db621c3a9fc))
* change Execute API for Multi Schedule ([#1089](https://github.com/bucketeer-io/bucketeer/issues/1089)) ([7371e8c](https://github.com/bucketeer-io/bucketeer/commit/7371e8c195fa950129d8e7f35f424b23eac60740))
* demo user for web console ([#1121](https://github.com/bucketeer-io/bucketeer/issues/1121)) ([0672a73](https://github.com/bucketeer-io/bucketeer/commit/0672a7329c884c123bf17ec2a22602e6dad61bd1))
* fix Update API for Multi Schedule ([#1095](https://github.com/bucketeer-io/bucketeer/issues/1095)) ([e44ed39](https://github.com/bucketeer-io/bucketeer/commit/e44ed39ca248d940f56e7497402a9d5fad4c32c7))
* implement new auth architecture ([#924](https://github.com/bucketeer-io/bucketeer/issues/924)) ([0d64251](https://github.com/bucketeer-io/bucketeer/commit/0d64251c8648bb7301d6e476aa57da3cf6cb0cee))
* implement update feature api ([#1036](https://github.com/bucketeer-io/bucketeer/issues/1036)) ([11ebd16](https://github.com/bucketeer-io/bucketeer/commit/11ebd161313f706d2919a8aa8d4149b979257801))
* move console web ui to backend service ([#1096](https://github.com/bucketeer-io/bucketeer/issues/1096)) ([95ea884](https://github.com/bucketeer-io/bucketeer/commit/95ea884a523c170d5e545595cec71e1ec38d77ec))
* move metrics event to batch service ([#1020](https://github.com/bucketeer-io/bucketeer/issues/1020)) ([55c76a7](https://github.com/bucketeer-io/bucketeer/commit/55c76a707a2425acdf1a319d179a45a0df57a09e))
* show auditlog detail ([#1109](https://github.com/bucketeer-io/bucketeer/issues/1109)) ([08c2259](https://github.com/bucketeer-io/bucketeer/commit/08c225907eb5ce0e2ec7c5b8952e36c2f1cfb2f0))
* **ui:** add api key options of public api to form pages ([#1027](https://github.com/bucketeer-io/bucketeer/issues/1027)) ([1ac2f76](https://github.com/bucketeer-io/bucketeer/commit/1ac2f7616faecb42798c3b8a20081c7f0478a8b4))
* **ui:** add auditlog feature detail to auditlog page ([#1043](https://github.com/bucketeer-io/bucketeer/issues/1043)) ([2ecd42e](https://github.com/bucketeer-io/bucketeer/commit/2ecd42e77fb50f31ceab8c05d4f3d42df0783f2c))
* **ui:** implement sign in for demo user ([#1125](https://github.com/bucketeer-io/bucketeer/issues/1125)) ([ae032c8](https://github.com/bucketeer-io/bucketeer/commit/ae032c8a792738332a4d2d93fc04ab00e47efc5e))
* **ui:** new auth architecture ([#1084](https://github.com/bucketeer-io/bucketeer/issues/1084)) ([93438d5](https://github.com/bucketeer-io/bucketeer/commit/93438d5d1a1fb1ce675d62ee72d6a4365457d744))
* update storage for multi-schedule ([#1019](https://github.com/bucketeer-io/bucketeer/issues/1019)) ([b03796a](https://github.com/bucketeer-io/bucketeer/commit/b03796a2d1f2e7dac693c7ce0cc69643939eab9c))


### Bug Fixes

* account not found when using system admin account ([#1150](https://github.com/bucketeer-io/bucketeer/issues/1150)) ([61a33f9](https://github.com/bucketeer-io/bucketeer/commit/61a33f9ef00127da91871f2f698bae7b47d7cd9b))
* allow OpsType to be updated to Enable or Disable ([#1139](https://github.com/bucketeer-io/bucketeer/issues/1139)) ([d7df6be](https://github.com/bucketeer-io/bucketeer/commit/d7df6beee5337de662e78f3315a0a99146fad4b0))
* auditlog detail of goal does not have diff ([#1122](https://github.com/bucketeer-io/bucketeer/issues/1122)) ([6d7663c](https://github.com/bucketeer-io/bucketeer/commit/6d7663c8c254dce61c1908dab89a2f17494133f1))
* auditlogs have empty entity data ([#1120](https://github.com/bucketeer-io/bucketeer/issues/1120)) ([25d6917](https://github.com/bucketeer-io/bucketeer/commit/25d6917f82ad3dd1cfd3301fc605598bdbc7e490))
* cannot update archived features ([#1113](https://github.com/bucketeer-io/bucketeer/issues/1113)) ([b3a1aa5](https://github.com/bucketeer-io/bucketeer/commit/b3a1aa55abc86c9c1024ca23304f70fbe3c4847c))
* demo environment not being created ([#1127](https://github.com/bucketeer-io/bucketeer/issues/1127)) ([b822a6e](https://github.com/bucketeer-io/bucketeer/commit/b822a6e356b69cbcb868371946c38a93d921b6e2))
* envoy cannot register descriptor ([#1024](https://github.com/bucketeer-io/bucketeer/issues/1024)) ([c4b3004](https://github.com/bucketeer-io/bucketeer/commit/c4b300452a5c0c6a7295bb5684020eab75f9f84d))
* **evaluation:** race condition when removing the variation description ([#1151](https://github.com/bucketeer-io/bucketeer/issues/1151)) ([525991b](https://github.com/bucketeer-io/bucketeer/commit/525991b6ff6b5d5196ba49f94245fbbd5035dc4a))
* failed to put admin audit logs ([#1131](https://github.com/bucketeer-io/bucketeer/issues/1131)) ([6920b8b](https://github.com/bucketeer-io/bucketeer/commit/6920b8b033c9b4c62bba6603e26caa723c0852c8))
* internal error when generating access token ([#1145](https://github.com/bucketeer-io/bucketeer/issues/1145)) ([6bde965](https://github.com/bucketeer-io/bucketeer/commit/6bde965c7f82bf25fc48bebdd11579dcfb6629a3))
* nil error check during preparing demo users ([#1147](https://github.com/bucketeer-io/bucketeer/issues/1147)) ([f4edc5d](https://github.com/bucketeer-io/bucketeer/commit/f4edc5d482af92a758cf4446a883653125be75ab))
* proto clone changs empty slice to nil ([#1080](https://github.com/bucketeer-io/bucketeer/issues/1080)) ([fad28c0](https://github.com/bucketeer-io/bucketeer/commit/fad28c029ce09d0fcd90e8f304d833a388cbee90))
* publish domain event fails due to message being nil ([#1129](https://github.com/bucketeer-io/bucketeer/issues/1129)) ([17c868f](https://github.com/bucketeer-io/bucketeer/commit/17c868f4fa8cb725c235945075048824c6a35796))
* redirect to the login page if error in exchangeToken ([#1144](https://github.com/bucketeer-io/bucketeer/issues/1144)) ([456c2ff](https://github.com/bucketeer-io/bucketeer/commit/456c2ffccfb1c3c46d163c751455bbcdef436a82))
* remove envirnment table insert sql ([#1063](https://github.com/bucketeer-io/bucketeer/issues/1063)) ([e771d88](https://github.com/bucketeer-io/bucketeer/commit/e771d8883081e94010ccd0773551aca57a4038f6))
* **ui:** can't create a user segment [#1092](https://github.com/bucketeer-io/bucketeer/issues/1092) ([#1093](https://github.com/bucketeer-io/bucketeer/issues/1093)) ([c17360a](https://github.com/bucketeer-io/bucketeer/commit/c17360abb4cc321ebde8d881e462e5265f5b462b))
* **ui:** can't create an auto operation ([#1088](https://github.com/bucketeer-io/bucketeer/issues/1088)) ([e6220ec](https://github.com/bucketeer-io/bucketeer/commit/e6220ec896682ffa16a03247846a0c2298b0803e))
* **ui:** cannot create an enable auto operation ([#1134](https://github.com/bucketeer-io/bucketeer/issues/1134)) ([95019a7](https://github.com/bucketeer-io/bucketeer/commit/95019a71f5c02f0a66950f99883fb8c98d2c16ee))
* **ui:** incorrect and unmet peer dependency warnings ([#1039](https://github.com/bucketeer-io/bucketeer/issues/1039)) ([102c665](https://github.com/bucketeer-io/bucketeer/commit/102c6656887805ef28133cbe4efb024ac241564f))
* **ui:** prevent adding duplicate toasts with the same message ([#1148](https://github.com/bucketeer-io/bucketeer/issues/1148)) ([1eda1de](https://github.com/bucketeer-io/bucketeer/commit/1eda1de147270a54c0d81bd23e02a9d96f5dab34))
* **ui:** stop button translation ([#1021](https://github.com/bucketeer-io/bucketeer/issues/1021)) ([799e7fe](https://github.com/bucketeer-io/bucketeer/commit/799e7fed5658e62f574323d808cc203864c06203))
* update feature fails due to unknown column environment_id ([#1112](https://github.com/bucketeer-io/bucketeer/issues/1112)) ([339056a](https://github.com/bucketeer-io/bucketeer/commit/339056acf40cc1d33ca944102cb70baeada1a1b9))
* update TriggeredAt when AutoOps finished ([#1136](https://github.com/bucketeer-io/bucketeer/issues/1136)) ([28b5cca](https://github.com/bucketeer-io/bucketeer/commit/28b5cca5f2a511695afa7580aec86e0bb22d563f))
* variation value input is now shown in add page ([#1072](https://github.com/bucketeer-io/bucketeer/issues/1072)) ([0ee8a6a](https://github.com/bucketeer-io/bucketeer/commit/0ee8a6ae9a12634cac8a1484ee79b34dd1a9aec2))


### Miscellaneous

* add entity data to audit log in order to  show diff ([#1099](https://github.com/bucketeer-io/bucketeer/issues/1099)) ([bdd81e1](https://github.com/bucketeer-io/bucketeer/commit/bdd81e199f40a879b57059c03ce72f48eb9736ec))
* add entity data to auditlog storage ([#1103](https://github.com/bucketeer-io/bucketeer/issues/1103)) ([d2c5746](https://github.com/bucketeer-io/bucketeer/commit/d2c57468247c161bf50c09afb21fb44537681360))
* add fields to update feature api ([#1101](https://github.com/bucketeer-io/bucketeer/issues/1101)) ([cc1466b](https://github.com/bucketeer-io/bucketeer/commit/cc1466b8607a15323c6d06a829ef77dc2d4ebd8c))
* add generate all command to makefile ([#1047](https://github.com/bucketeer-io/bucketeer/issues/1047)) ([7e9100f](https://github.com/bucketeer-io/bucketeer/commit/7e9100f168c24e5eabc9494803e590c79ebd7af3))
* add pre-pull images command for dev container ([#1140](https://github.com/bucketeer-io/bucketeer/issues/1140)) ([1989c00](https://github.com/bucketeer-io/bucketeer/commit/1989c0070212bda354bd5363b051ddceb6c0e9d7))
* add project url code to api key cache ([#1130](https://github.com/bucketeer-io/bucketeer/issues/1130)) ([6d5c5c8](https://github.com/bucketeer-io/bucketeer/commit/6d5c5c89a02b8f22f6587482662d7f55f70988ef))
* add project url code to GetAPIKeyBySearchingAllEnvironments ([#1128](https://github.com/bucketeer-io/bucketeer/issues/1128)) ([a421232](https://github.com/bucketeer-io/bucketeer/commit/a421232fe939c017a0489b60822b4ca3e3e92ee1))
* add tags,enabled,archived to update feature api ([#1074](https://github.com/bucketeer-io/bucketeer/issues/1074)) ([544985d](https://github.com/bucketeer-io/bucketeer/commit/544985db104e18de7906f7abf8714872d94f5952))
* bigquery emulator support arm cpu ([#1033](https://github.com/bucketeer-io/bucketeer/issues/1033)) ([20a2b8f](https://github.com/bucketeer-io/bucketeer/commit/20a2b8f26a295ad3a731d49dcaf38676bac65270))
* call update feature api at progressive rollout execution ([#1114](https://github.com/bucketeer-io/bucketeer/issues/1114)) ([1ec622e](https://github.com/bucketeer-io/bucketeer/commit/1ec622e302fe7a81cbb1992e4b7827ff8b9c8cf3))
* change auto ops rule domain to support multi scheduling ([#994](https://github.com/bucketeer-io/bucketeer/issues/994)) ([8e112ee](https://github.com/bucketeer-io/bucketeer/commit/8e112ee0cecaff7e3dbca0c72039f13ee014b758))
* change bigquery emulator image to bucketeer ([#1034](https://github.com/bucketeer-io/bucketeer/issues/1034)) ([f657def](https://github.com/bucketeer-io/bucketeer/commit/f657def7b3ff66579b0883944ce4d9419e0a9ca7))
* change create auto ops api to support multi-schedule ([#1083](https://github.com/bucketeer-io/bucketeer/issues/1083)) ([aa198eb](https://github.com/bucketeer-io/bucketeer/commit/aa198eb62df6570d6fba3a20ca999cb8e7c37911))
* change to verify issuer and audience in the access token ([#1104](https://github.com/bucketeer-io/bucketeer/issues/1104)) ([5988a4f](https://github.com/bucketeer-io/bucketeer/commit/5988a4fbd7eae177e0700f7a92dbf85d50521517))
* check account status when generating access token and GetMe api ([#1142](https://github.com/bucketeer-io/bucketeer/issues/1142)) ([b52a9d4](https://github.com/bucketeer-io/bucketeer/commit/b52a9d47b315fb2e69ca467a87ef19b907be943c))
* dev container performance ([#1118](https://github.com/bucketeer-io/bucketeer/issues/1118)) ([3834dd4](https://github.com/bucketeer-io/bucketeer/commit/3834dd4661166d65e34bd5c0a33c7b5240d9b220))
* enable eslint recommended plugins ([#1045](https://github.com/bucketeer-io/bucketeer/issues/1045)) ([f4e18ac](https://github.com/bucketeer-io/bucketeer/commit/f4e18ac36b3714d2074ac4af2c4ad6454543257a))
* enable more fields to be updated with update feature api ([#1116](https://github.com/bucketeer-io/bucketeer/issues/1116)) ([787274b](https://github.com/bucketeer-io/bucketeer/commit/787274bdebb5820bc4f26973f6eef7660142d2c3))
* enable typescript-eslint/no-explicit-any ([#1053](https://github.com/bucketeer-io/bucketeer/issues/1053)) ([c1b6a92](https://github.com/bucketeer-io/bucketeer/commit/c1b6a920d658da73e8162724381542f7a50c5be7))
* enable typescript-eslint/no-unused-vars ([#1051](https://github.com/bucketeer-io/bucketeer/issues/1051)) ([aee163c](https://github.com/bucketeer-io/bucketeer/commit/aee163c91f44879a87f7bba9a36337051c5a0795))
* generate open api spec from gateway proto ([#1030](https://github.com/bucketeer-io/bucketeer/issues/1030)) ([9cc2bec](https://github.com/bucketeer-io/bucketeer/commit/9cc2becb6b9a09a59ed61dc2ea114948a4d80d13))
* implement env vars for the demo ui ([#1124](https://github.com/bucketeer-io/bucketeer/issues/1124)) ([c9ea32c](https://github.com/bucketeer-io/bucketeer/commit/c9ea32cb6b8d901170a9b961dcd685e4b0655b41))
* implement openapi options to generate api descriptions ([#1087](https://github.com/bucketeer-io/bucketeer/issues/1087)) ([fb5ea6f](https://github.com/bucketeer-io/bucketeer/commit/fb5ea6fdc5dfda931c5db18c96d8b009e68e914c))
* improve deployment in dev container ([#1061](https://github.com/bucketeer-io/bucketeer/issues/1061)) ([eff43ca](https://github.com/bucketeer-io/bucketeer/commit/eff43caf4b36c341f65a0de9d1b585207f6ec7b8))
* improve dev container service deployment ([#1115](https://github.com/bucketeer-io/bucketeer/issues/1115)) ([a449b28](https://github.com/bucketeer-io/bucketeer/commit/a449b28e7d4ebfb62def0c91effcdf3f4d15d5ae))
* improve security in the sign-in api ([#1126](https://github.com/bucketeer-io/bucketeer/issues/1126)) ([9493135](https://github.com/bucketeer-io/bucketeer/commit/9493135ec4e63a3e9d3e0fb8923bd4530d8cb47c))
* make feature flags in targeting rule searchable ([#1110](https://github.com/bucketeer-io/bucketeer/issues/1110)) ([afd6b6c](https://github.com/bucketeer-io/bucketeer/commit/afd6b6cd74b83a1b3964bcc58e020e3deb98826d))
* make the `ttlSecondsAfterFinished` optional in the migration job ([#1117](https://github.com/bucketeer-io/bucketeer/issues/1117)) ([0f70605](https://github.com/bucketeer-io/bucketeer/commit/0f70605ce3896f04562bde733ece7b665f4ec4b6))
* move atlas installation to dockerfile ([#1075](https://github.com/bucketeer-io/bucketeer/issues/1075)) ([183b566](https://github.com/bucketeer-io/bucketeer/commit/183b566aa63b516d0ccd52333e82cbe146298409))
* reformat AutoOpsStatus ([#1029](https://github.com/bucketeer-io/bucketeer/issues/1029)) ([c2b837f](https://github.com/bucketeer-io/bucketeer/commit/c2b837f3c873ced51d04e30b977fa703ea7d3424))
* remove dex ([#1097](https://github.com/bucketeer-io/bucketeer/issues/1097)) ([1e49850](https://github.com/bucketeer-io/bucketeer/commit/1e49850a7620b40a8fafa1b14cd9db3845f32061))
* remove github token ([#1071](https://github.com/bucketeer-io/bucketeer/issues/1071)) ([c09ec8d](https://github.com/bucketeer-io/bucketeer/commit/c09ec8db8a27b16e972bf7c34db5582ffbca0b3f))
* remove not found log from check account status ([#1146](https://github.com/bucketeer-io/bucketeer/issues/1146)) ([bd8a1ec](https://github.com/bucketeer-io/bucketeer/commit/bd8a1ec4552c0a3b3df49cc91cb9d37e2217808b))
* remove unused files ([#1068](https://github.com/bucketeer-io/bucketeer/issues/1068)) ([383366b](https://github.com/bucketeer-io/bucketeer/commit/383366b1ba3852cf2aa4cfa6d4825fd100dbe1d6))
* return unauthenticated error if account disabled ([#1141](https://github.com/bucketeer-io/bucketeer/issues/1141)) ([3d6b660](https://github.com/bucketeer-io/bucketeer/commit/3d6b660835749d9c2c71a35af4a5f0a909873263))
* run push sender when feature updated event is created ([#1054](https://github.com/bucketeer-io/bucketeer/issues/1054)) ([fae4909](https://github.com/bucketeer-io/bucketeer/commit/fae49098414b23c4c94f0aff7cad17caa48ec921))
* set go format settings to devcontainer ([#1037](https://github.com/bucketeer-io/bucketeer/issues/1037)) ([879a818](https://github.com/bucketeer-io/bucketeer/commit/879a8187faf99c562891fd25d423e2b8a99a485c))
* set the token issue at field ([#1102](https://github.com/bucketeer-io/bucketeer/issues/1102)) ([55c5e43](https://github.com/bucketeer-io/bucketeer/commit/55c5e43e991c53ec98bee0c1d36b9f04dfb660f3))
* udpate dev container service token ([#1107](https://github.com/bucketeer-io/bucketeer/issues/1107)) ([13817e4](https://github.com/bucketeer-io/bucketeer/commit/13817e468539a95e486b72d4e4cd93a2457cb507))
* **ui:** change on/off label for the the schedule operation ([#1137](https://github.com/bucketeer-io/bucketeer/issues/1137)) ([3351871](https://github.com/bucketeer-io/bucketeer/commit/33518713b4300da54d1641bfbc059ba2d0d59107))
* **ui:** update segment documentation link ([#1094](https://github.com/bucketeer-io/bucketeer/issues/1094)) ([9a9f301](https://github.com/bucketeer-io/bucketeer/commit/9a9f30174b5fa570f11e714d403402b98edeaa8b))
* update dev container values.dev.yaml ([#1069](https://github.com/bucketeer-io/bucketeer/issues/1069)) ([07a10d0](https://github.com/bucketeer-io/bucketeer/commit/07a10d0ebada2ecdceb929dcfa4f7e908ae66083))
* update doc links ([#1091](https://github.com/bucketeer-io/bucketeer/issues/1091)) ([6db3942](https://github.com/bucketeer-io/bucketeer/commit/6db39421aae37aaeb2bfff255f068a02ea57cfc4))
* update feature returns updated object ([#1059](https://github.com/bucketeer-io/bucketeer/issues/1059)) ([ae97b4c](https://github.com/bucketeer-io/bucketeer/commit/ae97b4c8eafe0c6ef11bcdd543d231c3652c2afe))
* update mysql version to 8.0 ([#1052](https://github.com/bucketeer-io/bucketeer/issues/1052)) ([1fde203](https://github.com/bucketeer-io/bucketeer/commit/1fde203021f4424fbe540a40992c5d65f82e6e64))


### Reverts

* default vars for dev container ([#1064](https://github.com/bucketeer-io/bucketeer/issues/1064)) ([39e5586](https://github.com/bucketeer-io/bucketeer/commit/39e5586df65b5167a2a8215a34484cc0a752a7b3))


### Build System

* **deps:** bump amannn/action-semantic-pull-request ([#1081](https://github.com/bucketeer-io/bucketeer/issues/1081)) ([bd1d960](https://github.com/bucketeer-io/bucketeer/commit/bd1d9604b73862e9f97b8ba9012a3de42611051f))
* **deps:** bump googleapis/release-please-action ([#1048](https://github.com/bucketeer-io/bucketeer/issues/1048)) ([48dd57d](https://github.com/bucketeer-io/bucketeer/commit/48dd57dfe86c35f12fa9b3ae7362e0da0cec8833))
* **deps:** bump the dependencies group with 12 updates ([#1049](https://github.com/bucketeer-io/bucketeer/issues/1049)) ([442b4b0](https://github.com/bucketeer-io/bucketeer/commit/442b4b0761627cb36d2b1c7bd502ac5f0d691eba))
* **deps:** bump the dependencies group with 8 updates ([#1082](https://github.com/bucketeer-io/bucketeer/issues/1082)) ([f6cf901](https://github.com/bucketeer-io/bucketeer/commit/f6cf901ad5b619d43b783a5ece1a360d89e3a9b3))

## [0.4.5](https://github.com/bucketeer-io/bucketeer/compare/v0.4.4...v0.4.5) (2024-06-13)


### Features

* evaluate flag dependency of targeting rule ([#983](https://github.com/bucketeer-io/bucketeer/issues/983)) ([15f1008](https://github.com/bucketeer-io/bucketeer/commit/15f10084d06a74ff111350161a691967a6df3699))
* feature can be set in targeting ([#993](https://github.com/bucketeer-io/bucketeer/issues/993)) ([0f62cb2](https://github.com/bucketeer-io/bucketeer/commit/0f62cb2c7399c62c11e7e153c40fa0fd46877f37))
* move auditLog persister to batch service ([#984](https://github.com/bucketeer-io/bucketeer/issues/984)) ([25ed7ea](https://github.com/bucketeer-io/bucketeer/commit/25ed7ea2fde3efc247be24c67cdf3f39e295593b))
* move on-demand subscribers to batch service ([#952](https://github.com/bucketeer-io/bucketeer/issues/952)) ([b6c3b40](https://github.com/bucketeer-io/bucketeer/commit/b6c3b4068cbf95ed58fec580f0168f1d83549b80))
* move push sender to batch service ([#995](https://github.com/bucketeer-io/bucketeer/issues/995)) ([7120406](https://github.com/bucketeer-io/bucketeer/commit/71204063ab4173dd9afcd313b148476cee0c85cc))
* **ui:** add client and server SDKs role in API key page ([#1016](https://github.com/bucketeer-io/bucketeer/issues/1016)) ([83d9a43](https://github.com/bucketeer-io/bucketeer/commit/83d9a433887653cc54fd65acdbd63af131f925d1))


### Bug Fixes

* including archived features in the count query ([#996](https://github.com/bucketeer-io/bucketeer/issues/996)) ([e7cc082](https://github.com/bucketeer-io/bucketeer/commit/e7cc0827d42ae6818ec9587ab3a2452b244b4340))
* missing rule clause validation ([#999](https://github.com/bucketeer-io/bucketeer/issues/999)) ([8b12f92](https://github.com/bucketeer-io/bucketeer/commit/8b12f92fb9541c0e2cf7a77004155ab766642aed))
* segment cannot be set in the targeting rule ([#1015](https://github.com/bucketeer-io/bucketeer/issues/1015)) ([b6aa2af](https://github.com/bucketeer-io/bucketeer/commit/b6aa2af63b8b7d70831a9ef0a62beb692c6e64a2))


### Miscellaneous

* add api key roles for public api ([#998](https://github.com/bucketeer-io/bucketeer/issues/998)) ([62356ab](https://github.com/bucketeer-io/bucketeer/commit/62356abdd4b828cd4cb0294a6007d7723c8789a6))
* add environment url code label to metrics ([#1005](https://github.com/bucketeer-io/bucketeer/issues/1005)) ([f0ad1fb](https://github.com/bucketeer-io/bucketeer/commit/f0ad1fb934fc2e218d7cb69e788dbc139ec2852c))
* add function to return other features to depends on the feature ([#976](https://github.com/bucketeer-io/bucketeer/issues/976)) ([7256a1e](https://github.com/bucketeer-io/bucketeer/commit/7256a1ef37fcdc296a328610c9ba4b8b1effc4f3))
* add UpdateFeature ([#1001](https://github.com/bucketeer-io/bucketeer/issues/1001)) ([9259bed](https://github.com/bucketeer-io/bucketeer/commit/9259bedcf36bd635942f6603a21e25acf6545ca9))
* add validation of feature dependency rule ([#979](https://github.com/bucketeer-io/bucketeer/issues/979)) ([b54668e](https://github.com/bucketeer-io/bucketeer/commit/b54668e92df42015dd774ba246ef2d30bdba945c))
* change proto-all to run all the proto commands ([#1000](https://github.com/bucketeer-io/bucketeer/issues/1000)) ([a8c00ad](https://github.com/bucketeer-io/bucketeer/commit/a8c00ad066e6371ac9365b0ef6e4fdaa57b2e081))
* fix devcontainer for development ([#1008](https://github.com/bucketeer-io/bucketeer/issues/1008)) ([74406be](https://github.com/bucketeer-io/bucketeer/commit/74406bef5645e9c23090c3340f5442f69dd7e2ab))
* update proto for multi-schedule ([#1010](https://github.com/bucketeer-io/bucketeer/issues/1010)) ([cbb91b9](https://github.com/bucketeer-io/bucketeer/commit/cbb91b99ba5b655fda55ca505f4b83c6049e6441))


### Build System

* **deps:** bump the dependencies group with 2 updates ([#980](https://github.com/bucketeer-io/bucketeer/issues/980)) ([c8b60e6](https://github.com/bucketeer-io/bucketeer/commit/c8b60e6247921d65d4d0493f250c9a2872170024))
* **deps:** bump the dependencies group with 2 updates ([#981](https://github.com/bucketeer-io/bucketeer/issues/981)) ([9aa66d8](https://github.com/bucketeer-io/bucketeer/commit/9aa66d8c6369faf2f8963f9a988a4e7fd601acce))

## [0.4.4](https://github.com/bucketeer-io/bucketeer/compare/v0.4.3...v0.4.4) (2024-05-31)


### Features

* add flag depencency proto to rule ([#970](https://github.com/bucketeer-io/bucketeer/issues/970)) ([f4eb6ff](https://github.com/bucketeer-io/bucketeer/commit/f4eb6ff57a7976576ed31dc477b459918a3fb8d8))


### Bug Fixes

* evaluation fails ([#967](https://github.com/bucketeer-io/bucketeer/issues/967)) ([22e06a2](https://github.com/bucketeer-io/bucketeer/commit/22e06a2d9405cb9072de7e4abe5272dcc6a97f74))

## [0.4.3](https://github.com/bucketeer-io/bucketeer/compare/v0.4.2...v0.4.3) (2024-05-31)


### Miscellaneous

* **proto:** add get feature flags and segment users to api ID ([#969](https://github.com/bucketeer-io/bucketeer/issues/969)) ([5375af5](https://github.com/bucketeer-io/bucketeer/commit/5375af5e99076b6328cd8de6f248755a276d37f7))

## [0.4.2](https://github.com/bucketeer-io/bucketeer/compare/v0.4.1...v0.4.2) (2024-05-29)


### Miscellaneous

* update evaluation module version ([#964](https://github.com/bucketeer-io/bucketeer/issues/964)) ([5bfcfab](https://github.com/bucketeer-io/bucketeer/commit/5bfcfab672aaf5999a7791a5a2d28cb1c4209371))

## [0.4.1](https://github.com/bucketeer-io/bucketeer/compare/v0.4.0...v0.4.1) (2024-05-28)


### Build System

* **deps:** bump docker/setup-buildx-action in the dependencies group ([#911](https://github.com/bucketeer-io/bucketeer/issues/911)) ([76f22e7](https://github.com/bucketeer-io/bucketeer/commit/76f22e7989ece653be94a9c1e4217757a066a01f))
* **deps:** bump lewagon/wait-on-check-action in the dependencies group ([#906](https://github.com/bucketeer-io/bucketeer/issues/906)) ([5b4819e](https://github.com/bucketeer-io/bucketeer/commit/5b4819ebb448b507fc2b096560dff803f2ed217c))
* **deps:** bump the dependencies group across 1 directory with 19 updates ([#961](https://github.com/bucketeer-io/bucketeer/issues/961)) ([e3c95ce](https://github.com/bucketeer-io/bucketeer/commit/e3c95ceef4b341abfd18469af75c64e5c2a56660))
* **deps:** bump the dependencies group with 15 updates ([#864](https://github.com/bucketeer-io/bucketeer/issues/864)) ([6f3dc15](https://github.com/bucketeer-io/bucketeer/commit/6f3dc15a070e06a8d46a245d236cae684ead31eb))
* **deps:** bump the dependencies group with 17 updates ([#899](https://github.com/bucketeer-io/bucketeer/issues/899)) ([2b3f487](https://github.com/bucketeer-io/bucketeer/commit/2b3f487df88f354cf3de69cc97a59648ee47a5d9))
* **deps:** bump the dependencies group with 2 updates ([#912](https://github.com/bucketeer-io/bucketeer/issues/912)) ([3e3f551](https://github.com/bucketeer-io/bucketeer/commit/3e3f551f5a196aef8705109e9d6c4fa5aaff6cba))
* **deps:** bump the dependencies group with 4 updates ([#932](https://github.com/bucketeer-io/bucketeer/issues/932)) ([b54c4d7](https://github.com/bucketeer-io/bucketeer/commit/b54c4d7229f4d86b55ca8aaca75ae2a169c3afa3))
* **deps:** bump the dependencies group with 5 updates ([#900](https://github.com/bucketeer-io/bucketeer/issues/900)) ([7ccf69f](https://github.com/bucketeer-io/bucketeer/commit/7ccf69fb1c2a39bdd406630af2bb06704e40c9c3))
* **deps:** bump the dependencies group with 5 updates ([#907](https://github.com/bucketeer-io/bucketeer/issues/907)) ([8fbd877](https://github.com/bucketeer-io/bucketeer/commit/8fbd8773d656758a182fe9104f31cacdb5d519d7))


### Miscellaneous

* add environment settings proto ([#875](https://github.com/bucketeer-io/bucketeer/issues/875)) ([b4df666](https://github.com/bucketeer-io/bucketeer/commit/b4df66670d6b5229edfe6937889fd9a8a53eeb7e))
* add error logs when checking requests in the api-gateway ([#902](https://github.com/bucketeer-io/bucketeer/issues/902)) ([3818270](https://github.com/bucketeer-io/bucketeer/commit/38182700e1803ed3ac937849e5da565f2562aec5))
* add error logs when checking the env api key ([#905](https://github.com/bucketeer-io/bucketeer/issues/905)) ([5e1d525](https://github.com/bucketeer-io/bucketeer/commit/5e1d525923f5cb468f0386fbfd49bff0f32c19a2))
* add get segment users api  ([#951](https://github.com/bucketeer-io/bucketeer/issues/951)) ([69f55ef](https://github.com/bucketeer-io/bucketeer/commit/69f55ef9a09f17f961df999f697ff83f91539756))
* add hpa to batch service ([#942](https://github.com/bucketeer-io/bucketeer/issues/942)) ([2c48255](https://github.com/bucketeer-io/bucketeer/commit/2c482553d0288eadf0969eb738cc3fb8b8fc9370))
* add mysql open connection configuration to batch server ([#945](https://github.com/bucketeer-io/bucketeer/issues/945)) ([e436a11](https://github.com/bucketeer-io/bucketeer/commit/e436a1150e210d5db8cdd25c7d8b9b301f8d8340))
* add project url code to environment api key ([#956](https://github.com/bucketeer-io/bucketeer/issues/956)) ([85796c8](https://github.com/bucketeer-io/bucketeer/commit/85796c8fb4240efd9d4551392396fd033a6bf241))
* add project url code to metrics ([#958](https://github.com/bucketeer-io/bucketeer/issues/958)) ([89b6687](https://github.com/bucketeer-io/bucketeer/commit/89b668726e07b226171610e9229495fd65c9b109))
* add SDK_SERVER role to api key ([#923](https://github.com/bucketeer-io/bucketeer/issues/923)) ([047bc6d](https://github.com/bucketeer-io/bucketeer/commit/047bc6dceb1310b88739e2c0445ba09c6f289241))
* add source id to register events request ([#915](https://github.com/bucketeer-io/bucketeer/issues/915)) ([d09e2dd](https://github.com/bucketeer-io/bucketeer/commit/d09e2dd995461d06f8febb1816b1350525c58fa2))
* add subscribers config for dev container ([#917](https://github.com/bucketeer-io/bucketeer/issues/917)) ([1ab88cd](https://github.com/bucketeer-io/bucketeer/commit/1ab88cd2d95801cb5cf800d8678a97a018fde53e))
* change cronjob error code condition to ignore 503 and 000 errors ([#928](https://github.com/bucketeer-io/bucketeer/issues/928)) ([09f1516](https://github.com/bucketeer-io/bucketeer/commit/09f1516dfb6be7a88bf878008156c4818215a393))
* change metrics name for persister ([#944](https://github.com/bucketeer-io/bucketeer/issues/944)) ([eb61bb5](https://github.com/bucketeer-io/bucketeer/commit/eb61bb5cf9836a6b9a9dd6ff034d3de31e6c1d9d))
* change to allow server api role in the register events api ([#954](https://github.com/bucketeer-io/bucketeer/issues/954)) ([e179528](https://github.com/bucketeer-io/bucketeer/commit/e179528ee1946703d10d9121b422532d3c6c8774))
* change to use redis to cache environment api key ([#934](https://github.com/bucketeer-io/bucketeer/issues/934)) ([1c5a8f8](https://github.com/bucketeer-io/bucketeer/commit/1c5a8f8bab2a79da2c43eea232f59f74b38569d0))
* implement created_at in the feature and segment users cache ([#931](https://github.com/bucketeer-io/bucketeer/issues/931)) ([1f57182](https://github.com/bucketeer-io/bucketeer/commit/1f571824aefaf06ea3f59cc3c0fa950c2d970e1e))
* implement proto dir as go module ([#920](https://github.com/bucketeer-io/bucketeer/issues/920)) ([0b5de79](https://github.com/bucketeer-io/bucketeer/commit/0b5de79829bd1e8dbc146fd7a658278e5c8b1319))
* move evaluation events persister ([#948](https://github.com/bucketeer-io/bucketeer/issues/948)) ([e887f32](https://github.com/bucketeer-io/bucketeer/commit/e887f324d339a0ceca2b243bad407346f92011c5))
* move user persister to batch service ([#938](https://github.com/bucketeer-io/bucketeer/issues/938)) ([04ac1de](https://github.com/bucketeer-io/bucketeer/commit/04ac1deff4f0df7a08591fa86bdb201ba5739f6e))
* remove domain informer job for dev container ([#918](https://github.com/bucketeer-io/bucketeer/issues/918)) ([f87a0c9](https://github.com/bucketeer-io/bucketeer/commit/f87a0c9c4703630753f9e3ead945cc881506804c))
* remove segment persister ([#909](https://github.com/bucketeer-io/bucketeer/issues/909)) ([1c6bce1](https://github.com/bucketeer-io/bucketeer/commit/1c6bce114e59bfe88cda619a58aea26519455196))
* remove transaction from upserting in the user persister ([#946](https://github.com/bucketeer-io/bucketeer/issues/946)) ([1335afe](https://github.com/bucketeer-io/bucketeer/commit/1335afe52afb368784bca5d57ebdee46e3d9e480))
* remove unnecessary Stop() ([#867](https://github.com/bucketeer-io/bucketeer/issues/867)) ([ecce354](https://github.com/bucketeer-io/bucketeer/commit/ecce35428b83dac2941ce815fcd7181f5d03c6b8))
* remove unused import ([#878](https://github.com/bucketeer-io/bucketeer/issues/878)) ([2a4a89a](https://github.com/bucketeer-io/bucketeer/commit/2a4a89ab9d934bdc43d6c89116fe49560f112502))
* rename batch server subscriber metrics ([#949](https://github.com/bucketeer-io/bucketeer/issues/949)) ([6275053](https://github.com/bucketeer-io/bucketeer/commit/6275053a2960680e5f1bfe4640c01e7723dd7ada))
* revert check environment role condition ([#925](https://github.com/bucketeer-io/bucketeer/issues/925)) ([3b9d3ac](https://github.com/bucketeer-io/bucketeer/commit/3b9d3acc58a7fc641dc7f4c60da653ad3d3e3961))
* update create api key command ([#957](https://github.com/bucketeer-io/bucketeer/issues/957)) ([1ea71f9](https://github.com/bucketeer-io/bucketeer/commit/1ea71f94b86085a3262226b3c060c2c896cc847f))
* update flag cache when a flag changes ([#874](https://github.com/bucketeer-io/bucketeer/issues/874)) ([3795a5f](https://github.com/bucketeer-io/bucketeer/commit/3795a5f19d3e04a3241772c74f17a6b1818ad09a))
* update go-jose ([#960](https://github.com/bucketeer-io/bucketeer/issues/960)) ([3cd13b6](https://github.com/bucketeer-io/bucketeer/commit/3cd13b60f7faf5d1891d70dd32ec169a4d095b13))
* use go-sql-driver in the mysql client ([#876](https://github.com/bucketeer-io/bucketeer/issues/876)) ([1112bc3](https://github.com/bucketeer-io/bucketeer/commit/1112bc30f26f37794858e39354af45e96eb45909))
* validate environment settings when updating flags ([#881](https://github.com/bucketeer-io/bucketeer/issues/881)) ([4d97774](https://github.com/bucketeer-io/bucketeer/commit/4d977740c1eab7b7051d87eca9464d9942876c77))


### Features

* add `require_comment` option to environment settings  ([#883](https://github.com/bucketeer-io/bucketeer/issues/883)) ([5c10ae3](https://github.com/bucketeer-io/bucketeer/commit/5c10ae3a8966a34bf58f2d1d1d8a74d05248f49d))
* add batch service authentication ([#926](https://github.com/bucketeer-io/bucketeer/issues/926)) ([094adce](https://github.com/bucketeer-io/bucketeer/commit/094adce29e134f4e96dca7380358306462abdf32))
* add evaluation module ([#922](https://github.com/bucketeer-io/bucketeer/issues/922)) ([4551f8d](https://github.com/bucketeer-io/bucketeer/commit/4551f8d5869a81fe2960174ccac51c50b4d83369))
* add get feature flags api for server sdk ([#940](https://github.com/bucketeer-io/bucketeer/issues/940)) ([2470bed](https://github.com/bucketeer-io/bucketeer/commit/2470bed3e79a9e8ada94af85ba5289230a2c5107))
* add requst counter metrics to api-gateway ([#930](https://github.com/bucketeer-io/bucketeer/issues/930)) ([0d6d9b2](https://github.com/bucketeer-io/bucketeer/commit/0d6d9b2c2d72942fe6d6d8485fc1012edc70b285))
* create local environment using dev container ([#486](https://github.com/bucketeer-io/bucketeer/issues/486)) ([d5bbd2d](https://github.com/bucketeer-io/bucketeer/commit/d5bbd2d1f834c8a57720895937ceac8d2ce0ef84))
* move segment persister to batch service ([#896](https://github.com/bucketeer-io/bucketeer/issues/896)) ([58b34f1](https://github.com/bucketeer-io/bucketeer/commit/58b34f1620fd89495ceefa6521ad8a6f59dafb6d))
* multi subscriber arch in batch service ([#880](https://github.com/bucketeer-io/bucketeer/issues/880)) ([2961aa0](https://github.com/bucketeer-io/bucketeer/commit/2961aa0c88f1f412db6777ad1f52cc747c960ffe))
* **ui:** add require_comment option to environment settings ([#882](https://github.com/bucketeer-io/bucketeer/issues/882)) ([4c3a60e](https://github.com/bucketeer-io/bucketeer/commit/4c3a60e583c4f5bee7db6418eb0dc883043111e7))


### Bug Fixes

* cannot create a rollout when the flag has a scheduled operation ([#859](https://github.com/bucketeer-io/bucketeer/issues/859)) ([4a23a14](https://github.com/bucketeer-io/bucketeer/commit/4a23a14ac6758edfdf798585209d69ce01aa9449))
* Confirm dialog on targeting page shouldn't display Enabled/Disabled and scheduling options unless only the flag switch is altered. ([#894](https://github.com/bucketeer-io/bucketeer/issues/894)) ([2b8d5fd](https://github.com/bucketeer-io/bucketeer/commit/2b8d5fd191c877c6e901aeb2d28506868a321e5a))
* get segment users api condition ([#953](https://github.com/bucketeer-io/bucketeer/issues/953)) ([7d3d8a1](https://github.com/bucketeer-io/bucketeer/commit/7d3d8a1ce88670b78e8c4377445b39d974488720))
* infinite loop when trying to enable/disable a flag when using auto operation ([#914](https://github.com/bucketeer-io/bucketeer/issues/914)) ([77e61b9](https://github.com/bucketeer-io/bucketeer/commit/77e61b967187279e78c6778c6da2ef56df41dcf9))
* mysql db open connection flag in the batch server ([#947](https://github.com/bucketeer-io/bucketeer/issues/947)) ([b3ebf79](https://github.com/bucketeer-io/bucketeer/commit/b3ebf793614eea1b92d862b1392c4f3fb14f76eb))
* nil pointer when logging ([#943](https://github.com/bucketeer-io/bucketeer/issues/943)) ([0cce006](https://github.com/bucketeer-io/bucketeer/commit/0cce006abf385b982c3bc2bd33779516ac2e9a34))
* pubsub subscription check stops working when an error occurs ([#852](https://github.com/bucketeer-io/bucketeer/issues/852)) ([2525fca](https://github.com/bucketeer-io/bucketeer/commit/2525fca807034ca87e56d8471a9a706a37e36671))
* report subscriberReceivedCounter for domainEventInformer ([#950](https://github.com/bucketeer-io/bucketeer/issues/950)) ([8cb15a4](https://github.com/bucketeer-io/bucketeer/commit/8cb15a497501ce2f82078a94bc1eff04db86291e))
* **ui:** experiment creation page shouldn't list archived items ([#851](https://github.com/bucketeer-io/bucketeer/issues/851)) ([4c735a8](https://github.com/bucketeer-io/bucketeer/commit/4c735a8439fccb58504a4f7ffca272807beca6e8))
* **ui:** invalid documentation links for pushes and notifications pages ([#856](https://github.com/bucketeer-io/bucketeer/issues/856)) ([1cdda52](https://github.com/bucketeer-io/bucketeer/commit/1cdda529502e6b643f25ba0942aea62885be64e8))
* **ui:** kill switch operation's start status is incorrect ([#853](https://github.com/bucketeer-io/bucketeer/issues/853)) ([8aee89e](https://github.com/bucketeer-io/bucketeer/commit/8aee89ecd4dca4f65369a316b52b56a8b767588b))


### Performance Improvements

* implement multiple upserting for user persister ([#936](https://github.com/bucketeer-io/bucketeer/issues/936)) ([9fb40ca](https://github.com/bucketeer-io/bucketeer/commit/9fb40ca38086f506da0aa736839fe4de4331ddcd))
* upsert segment user query ([#898](https://github.com/bucketeer-io/bucketeer/issues/898)) ([7c2f097](https://github.com/bucketeer-io/bucketeer/commit/7c2f097b724f6f4ef9177f5fa1e38b63724863ae))

## [0.4.0](https://github.com/bucketeer-io/bucketeer/compare/v0.3.0...v0.4.0) (2024-02-02)


### ⚠ BREAKING CHANGES

* use range for templating cronjobs ([#689](https://github.com/bucketeer-io/bucketeer/issues/689))

### Build System

* Add code-butler ([#585](https://github.com/bucketeer-io/bucketeer/issues/585)) ([4ca4e2f](https://github.com/bucketeer-io/bucketeer/commit/4ca4e2f4e339859aa71346b92d3672eaf9ab7b37))
* **deps-dev:** bump @babel/preset-react in /ui/web-v2 ([#756](https://github.com/bucketeer-io/bucketeer/issues/756)) ([4728864](https://github.com/bucketeer-io/bucketeer/commit/4728864c1e236d4094715ce0ccf6d8764519ecba))
* **deps-dev:** bump @typescript-eslint/eslint-plugin in /ui/web-v2 ([#580](https://github.com/bucketeer-io/bucketeer/issues/580)) ([89e5a5f](https://github.com/bucketeer-io/bucketeer/commit/89e5a5f106021e257d556cf5d9a6cb99036db280))
* **deps-dev:** bump eslint-plugin-react-hooks in /ui/web-v2 ([#583](https://github.com/bucketeer-io/bucketeer/issues/583)) ([5fb4e15](https://github.com/bucketeer-io/bucketeer/commit/5fb4e15335c0e28506285b1848e5f64bc39f29aa))
* **deps:** bump @emotion/styled from 11.1.5 to 11.11.0 in /ui/web-v2 ([#601](https://github.com/bucketeer-io/bucketeer/issues/601)) ([656f5ac](https://github.com/bucketeer-io/bucketeer/commit/656f5ac9520d913d74003ff34e833a03ee6fe69f))
* **deps:** bump @material-ui/icons from 4.9.1 to 4.11.3 in /ui/web-v2 ([#602](https://github.com/bucketeer-io/bucketeer/issues/602)) ([e56926f](https://github.com/bucketeer-io/bucketeer/commit/e56926f04065e7aff3daff3f7bb8dfc38ecb38f7))
* **deps:** bump @popperjs/core from 2.11.3 to 2.11.8 in /ui/web-v2 ([#598](https://github.com/bucketeer-io/bucketeer/issues/598)) ([70ef2d8](https://github.com/bucketeer-io/bucketeer/commit/70ef2d82512861c0f1e2bfcb747009cbd1a2a087))
* **deps:** bump actions/cache from 3 to 4 ([#766](https://github.com/bucketeer-io/bucketeer/issues/766)) ([899ece0](https://github.com/bucketeer-io/bucketeer/commit/899ece06a471b284296e197363b7d038e1a83d7d))
* **deps:** bump amannn/action-semantic-pull-request ([#534](https://github.com/bucketeer-io/bucketeer/issues/534)) ([3bea6f3](https://github.com/bucketeer-io/bucketeer/commit/3bea6f3cfa7fac0c3ef9d024088136d9cb3917c6))
* **deps:** bump amannn/action-semantic-pull-request ([#603](https://github.com/bucketeer-io/bucketeer/issues/603)) ([3b436db](https://github.com/bucketeer-io/bucketeer/commit/3b436dbdeeef177e2f4d579f45116a33a8ea435f))
* **deps:** bump arduino/setup-protoc from 2.0.0 to 2.1.0 ([#531](https://github.com/bucketeer-io/bucketeer/issues/531)) ([54e806a](https://github.com/bucketeer-io/bucketeer/commit/54e806aa7f201368970be337b920657e24e1516c))
* **deps:** bump arduino/setup-protoc from 2.1.0 to 3.0.0 ([#767](https://github.com/bucketeer-io/bucketeer/issues/767)) ([2f6e338](https://github.com/bucketeer-io/bucketeer/commit/2f6e338dd105e843a454170107dcac472aa07bcb))
* **deps:** bump bytes from 3.1.1 to 3.1.2 in /ui/web-v2 ([#582](https://github.com/bucketeer-io/bucketeer/issues/582)) ([057281a](https://github.com/bucketeer-io/bucketeer/commit/057281a5730b757c88ac840cbe8bb2bea25b1c50))
* **deps:** bump classnames from 2.2.6 to 2.5.1 in /ui/web-v2 ([#644](https://github.com/bucketeer-io/bucketeer/issues/644)) ([d6a5c89](https://github.com/bucketeer-io/bucketeer/commit/d6a5c898ac63f326d475a1fa23004b07c8d3bbdb))
* **deps:** bump cloud.google.com/go/bigquery from 1.52.0 to 1.53.0 ([#494](https://github.com/bucketeer-io/bucketeer/issues/494)) ([1ac1e95](https://github.com/bucketeer-io/bucketeer/commit/1ac1e95cacabf9bf1edd894fb632831369824bae))
* **deps:** bump cloud.google.com/go/bigquery from 1.53.0 to 1.55.0 ([#538](https://github.com/bucketeer-io/bucketeer/issues/538)) ([d18fa5b](https://github.com/bucketeer-io/bucketeer/commit/d18fa5b7a615c5b1fe20fdf2041815025a94371c))
* **deps:** bump cloud.google.com/go/kms from 1.12.1 to 1.15.1 ([#521](https://github.com/bucketeer-io/bucketeer/issues/521)) ([1714a99](https://github.com/bucketeer-io/bucketeer/commit/1714a99878cc072e70a0e022e42616178bbafd2d))
* **deps:** bump cloud.google.com/go/kms from 1.15.1 to 1.15.4 ([#575](https://github.com/bucketeer-io/bucketeer/issues/575)) ([7f6b218](https://github.com/bucketeer-io/bucketeer/commit/7f6b218f07f3d7101f465cde64f576b10cf64d49))
* **deps:** bump cloud.google.com/go/profiler from 0.3.1 to 0.4.0 ([#572](https://github.com/bucketeer-io/bucketeer/issues/572)) ([8caf488](https://github.com/bucketeer-io/bucketeer/commit/8caf48806cdfc1c22bddfb1032961f1dda5cce02))
* **deps:** bump contributor-assistant/github-action ([#532](https://github.com/bucketeer-io/bucketeer/issues/532)) ([c604c7e](https://github.com/bucketeer-io/bucketeer/commit/c604c7eedd6c8e6c22b8f61a5f8d31295206367d))
* **deps:** bump core-js from 3.9.1 to 3.35.0 in /ui/web-v2 ([#642](https://github.com/bucketeer-io/bucketeer/issues/642)) ([d5b3db9](https://github.com/bucketeer-io/bucketeer/commit/d5b3db9852312779d643612a71df6a8656194567))
* **deps:** bump deep-equal from 2.2.1 to 2.2.3 in /ui/web-v2 ([#641](https://github.com/bucketeer-io/bucketeer/issues/641)) ([6d6458f](https://github.com/bucketeer-io/bucketeer/commit/6d6458f913c89e28756550a8571aa1901a689bb4))
* **deps:** bump docker/setup-buildx-action from 2.5.0 to 2.9.1 ([#467](https://github.com/bucketeer-io/bucketeer/issues/467)) ([08a8685](https://github.com/bucketeer-io/bucketeer/commit/08a8685d0d53ff1a07dd28ad02c48143ae49d6c4))
* **deps:** bump docker/setup-buildx-action from 2.9.1 to 2.10.0 ([#525](https://github.com/bucketeer-io/bucketeer/issues/525)) ([9551abc](https://github.com/bucketeer-io/bucketeer/commit/9551abcfe3f372cb9f1373615024e949f2214a3d))
* **deps:** bump docker/setup-qemu-action from 2.2.0 to 3.0.0 ([#769](https://github.com/bucketeer-io/bucketeer/issues/769)) ([5346807](https://github.com/bucketeer-io/bucketeer/commit/53468079b46251e8fbd8ab463ab841b8deb01735))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config ([#491](https://github.com/bucketeer-io/bucketeer/issues/491)) ([0e39496](https://github.com/bucketeer-io/bucketeer/commit/0e394965aeff1fe432d513f5e01ad5888dab4fe5))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config ([#520](https://github.com/bucketeer-io/bucketeer/issues/520)) ([9b95a9b](https://github.com/bucketeer-io/bucketeer/commit/9b95a9bba95b57fea02f8af08f23c299f45efc0f))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/kms ([#523](https://github.com/bucketeer-io/bucketeer/issues/523)) ([b376aea](https://github.com/bucketeer-io/bucketeer/commit/b376aea54f2a90f74fd749452603a5a446f76e02))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/kms ([#573](https://github.com/bucketeer-io/bucketeer/issues/573)) ([d8fcc05](https://github.com/bucketeer-io/bucketeer/commit/d8fcc05f3c34f5b77eef7f497818757aa203ad8c))
* **deps:** bump github.com/go-resty/resty/v2 from 2.7.0 to 2.8.0 ([#536](https://github.com/bucketeer-io/bucketeer/issues/536)) ([bffad13](https://github.com/bucketeer-io/bucketeer/commit/bffad1347d0b60c4724feb523a14874b53eac149))
* **deps:** bump github.com/go-resty/resty/v2 from 2.8.0 to 2.11.0 ([#639](https://github.com/bucketeer-io/bucketeer/issues/639)) ([a4b360f](https://github.com/bucketeer-io/bucketeer/commit/a4b360f6a4cadb0d26609020245308f38c9943ad))
* **deps:** bump github.com/golang-migrate/migrate/v4 ([#497](https://github.com/bucketeer-io/bucketeer/issues/497)) ([2f7e265](https://github.com/bucketeer-io/bucketeer/commit/2f7e2658714655f07555eee5e270c0869a55cbc8))
* **deps:** bump github.com/itchyny/gojq from 0.12.13 to 0.12.14 ([#636](https://github.com/bucketeer-io/bucketeer/issues/636)) ([b494aed](https://github.com/bucketeer-io/bucketeer/commit/b494aedb4e1b607dc2392f322fcfb4bfeb6baad1))
* **deps:** bump github.com/itchyny/gojq from 0.12.5 to 0.12.13 ([#537](https://github.com/bucketeer-io/bucketeer/issues/537)) ([cce01ed](https://github.com/bucketeer-io/bucketeer/commit/cce01ed4e359ddd4503d55d1721a656160e3b6f3))
* **deps:** bump github.com/mna/redisc from 1.3.2 to 1.4.0 ([#637](https://github.com/bucketeer-io/bucketeer/issues/637)) ([784468e](https://github.com/bucketeer-io/bucketeer/commit/784468e8f6010cedb5b9761f58cac046f008e669))
* **deps:** bump github.com/nicksnyder/go-i18n/v2 from 2.2.0 to 2.2.2 ([#571](https://github.com/bucketeer-io/bucketeer/issues/571)) ([662fa02](https://github.com/bucketeer-io/bucketeer/commit/662fa02666e925e8e84c25977ec66345478dfbc7))
* **deps:** bump github.com/nicksnyder/go-i18n/v2 from 2.2.2 to 2.4.0 ([#764](https://github.com/bucketeer-io/bucketeer/issues/764)) ([1f07a4a](https://github.com/bucketeer-io/bucketeer/commit/1f07a4a8e992a78cb0ec36b3819747c2b4673434))
* **deps:** bump github.com/prometheus/client_golang ([#522](https://github.com/bucketeer-io/bucketeer/issues/522)) ([64bc8b7](https://github.com/bucketeer-io/bucketeer/commit/64bc8b71cf83c6546fa563b111d881586c08b2e7))
* **deps:** bump github.com/prometheus/client_golang ([#574](https://github.com/bucketeer-io/bucketeer/issues/574)) ([445e0a0](https://github.com/bucketeer-io/bucketeer/commit/445e0a010b1930aa32f98c43dc380de4041bc675))
* **deps:** bump github.com/prometheus/client_golang ([#635](https://github.com/bucketeer-io/bucketeer/issues/635)) ([3a9dc84](https://github.com/bucketeer-io/bucketeer/commit/3a9dc8404eedc6f7ff695f83aed529b2b1d0ceed))
* **deps:** bump go.uber.org/mock from 0.1.0 to 0.2.0 ([#496](https://github.com/bucketeer-io/bucketeer/issues/496)) ([3f21784](https://github.com/bucketeer-io/bucketeer/commit/3f21784393eb9e3f20df0184cdbe592b25d6c56c))
* **deps:** bump go.uber.org/mock from 0.2.0 to 0.4.0 ([#638](https://github.com/bucketeer-io/bucketeer/issues/638)) ([bb544e4](https://github.com/bucketeer-io/bucketeer/commit/bb544e41e89c726ba6ef53075fb5b345dec27a8b))
* **deps:** bump go.uber.org/zap from 1.17.0 to 1.24.0 ([#495](https://github.com/bucketeer-io/bucketeer/issues/495)) ([00a325c](https://github.com/bucketeer-io/bucketeer/commit/00a325c4e5f955fd1ca1e3dde104c7207eceb0e4))
* **deps:** bump go.uber.org/zap from 1.24.0 to 1.26.0 ([#761](https://github.com/bucketeer-io/bucketeer/issues/761)) ([3934766](https://github.com/bucketeer-io/bucketeer/commit/39347666332ef885838879076c877a147fd853d2))
* **deps:** bump golang.org/x/oauth2 from 0.11.0 to 0.12.0 ([#539](https://github.com/bucketeer-io/bucketeer/issues/539)) ([cd9e641](https://github.com/bucketeer-io/bucketeer/commit/cd9e64123920902da3c329dc03dd9a9bcc4c8c72))
* **deps:** bump golang.org/x/oauth2 from 0.12.0 to 0.15.0 ([#610](https://github.com/bucketeer-io/bucketeer/issues/610)) ([853f739](https://github.com/bucketeer-io/bucketeer/commit/853f7399b1908e857f7f0f82cf091eaef24a1e2c))
* **deps:** bump golang.org/x/oauth2 from 0.15.0 to 0.16.0 ([#765](https://github.com/bucketeer-io/bucketeer/issues/765)) ([9f0da43](https://github.com/bucketeer-io/bucketeer/commit/9f0da432b8570789a8a8a83e75c8aec6868f9452))
* **deps:** bump golang.org/x/sync from 0.5.0 to 0.6.0 ([#762](https://github.com/bucketeer-io/bucketeer/issues/762)) ([0340992](https://github.com/bucketeer-io/bucketeer/commit/0340992f7d95fcf51a1b96a1e58f00e06a243275))
* **deps:** bump golang.org/x/text from 0.9.0 to 0.11.0 ([#489](https://github.com/bucketeer-io/bucketeer/issues/489)) ([a2d75eb](https://github.com/bucketeer-io/bucketeer/commit/a2d75eb88d6605820781cd0ddfab400f54187b12))
* **deps:** bump gonum.org/v1/gonum from 0.11.0 to 0.14.0 ([#763](https://github.com/bucketeer-io/bucketeer/issues/763)) ([3fbf430](https://github.com/bucketeer-io/bucketeer/commit/3fbf430d6da106e500c82cc396aa1de5a884fb66))
* **deps:** bump google-github-actions/auth from 1.1.1 to 2.1.0 ([#770](https://github.com/bucketeer-io/bucketeer/issues/770)) ([5573b76](https://github.com/bucketeer-io/bucketeer/commit/5573b76555e7a9b616a81053e9a96576bd729735))
* **deps:** bump google-github-actions/release-please-action ([#493](https://github.com/bucketeer-io/bucketeer/issues/493)) ([54d9532](https://github.com/bucketeer-io/bucketeer/commit/54d95325b870cb04b3ba6e45af23602364ca1b0b))
* **deps:** bump google-github-actions/release-please-action ([#535](https://github.com/bucketeer-io/bucketeer/issues/535)) ([2450df7](https://github.com/bucketeer-io/bucketeer/commit/2450df73a3389f09c9d21293f45c76867cb7704b))
* **deps:** bump google-protobuf from 3.14.0 to 3.21.2 in /ui/web-v2 ([#600](https://github.com/bucketeer-io/bucketeer/issues/600)) ([7026cb6](https://github.com/bucketeer-io/bucketeer/commit/7026cb657945e9a9ab7ee8f9d8ac1eb219db07c0))
* **deps:** bump google.golang.org/api from 0.126.0 to 0.134.0 ([#490](https://github.com/bucketeer-io/bucketeer/issues/490)) ([11f3b6b](https://github.com/bucketeer-io/bucketeer/commit/11f3b6b5854b3c1232ecc28920f975eb7b536b6f))
* **deps:** bump google.golang.org/api from 0.134.0 to 0.138.0 ([#524](https://github.com/bucketeer-io/bucketeer/issues/524)) ([7a55dbe](https://github.com/bucketeer-io/bucketeer/commit/7a55dbe4c23efcf33ae9270679452ca7f62a2ebd))
* **deps:** bump google.golang.org/api from 0.138.0 to 0.152.0 ([#606](https://github.com/bucketeer-io/bucketeer/issues/606)) ([e6497fa](https://github.com/bucketeer-io/bucketeer/commit/e6497fa1d68450c1980a0b8606944ccdc335a8e3))
* **deps:** bump google.golang.org/grpc from 1.55.0 to 1.57.0 ([#488](https://github.com/bucketeer-io/bucketeer/issues/488)) ([d4706da](https://github.com/bucketeer-io/bucketeer/commit/d4706da5ffd163d4314dc4e46fd725d6dfba3236))
* **deps:** bump google.golang.org/protobuf from 1.30.0 to 1.31.0 ([#487](https://github.com/bucketeer-io/bucketeer/issues/487)) ([c5b3ab8](https://github.com/bucketeer-io/bucketeer/commit/c5b3ab87065ecb0cf58ee7e703cbd5a7c56c7f3c))
* **deps:** bump lewagon/wait-on-check-action from 1.3.1 to 1.3.3 ([#646](https://github.com/bucketeer-io/bucketeer/issues/646)) ([b9844ee](https://github.com/bucketeer-io/bucketeer/commit/b9844ee3aebf67f5b0528e1a069529e29e81f48a))
* **deps:** bump slackapi/slack-github-action from 1.24.0 to 1.25.0 ([#768](https://github.com/bucketeer-io/bucketeer/issues/768)) ([ae01bd0](https://github.com/bucketeer-io/bucketeer/commit/ae01bd011dca279ba6eae233fa1b34269b83a84f))
* **deps:** bump the dependencies group with 4 updates ([#779](https://github.com/bucketeer-io/bucketeer/issues/779)) ([03ace3c](https://github.com/bucketeer-io/bucketeer/commit/03ace3c7c18fa1cbb60fbfcaed6cf0c14b04dbf1))
* Specify gpt-4-1106-preview as the model for code-butler ([#616](https://github.com/bucketeer-io/bucketeer/issues/616)) ([e927419](https://github.com/bucketeer-io/bucketeer/commit/e92741993a781f1de2ecdbca3c67d6740c8fd687))


### Miscellaneous

* add additional validation when creating a trigger ([#625](https://github.com/bucketeer-io/bucketeer/issues/625)) ([f1aef4c](https://github.com/bucketeer-io/bucketeer/commit/f1aef4c826fe8e7194f0315036c476f4065c3713))
* add codeowners file ([#679](https://github.com/bucketeer-io/bucketeer/issues/679)) ([740f747](https://github.com/bucketeer-io/bucketeer/commit/740f747cb892be8a0fd3ad0c158faaa4a1a4af94))
* add double write account v1 and v2 ([#649](https://github.com/bucketeer-io/bucketeer/issues/649)) ([32b88fd](https://github.com/bucketeer-io/bucketeer/commit/32b88fd2c3ff695d614a31fd849d23360169ac64))
* add environment role v2 ([#527](https://github.com/bucketeer-io/bucketeer/issues/527)) ([3b5fb97](https://github.com/bucketeer-io/bucketeer/commit/3b5fb97d212c5cae7e3488d47e9cd1897c17c296))
* add flag trigger proto ([#588](https://github.com/bucketeer-io/bucketeer/issues/588)) ([e7524aa](https://github.com/bucketeer-io/bucketeer/commit/e7524aa6d67b9473eeab04eb777ea81108a782f9))
* add GoogleTagManager setting ([#516](https://github.com/bucketeer-io/bucketeer/issues/516)) ([4a65713](https://github.com/bucketeer-io/bucketeer/commit/4a657136c7893b0f772f9a0ccc6fadc957d83f64))
* add make run-httpstan ([#653](https://github.com/bucketeer-io/bucketeer/issues/653)) ([00ab57b](https://github.com/bucketeer-io/bucketeer/commit/00ab57ba74a9904254541363c2bb3fa8ab62e914))
* add mau partition deleter ([#584](https://github.com/bucketeer-io/bucketeer/issues/584)) ([909dd5c](https://github.com/bucketeer-io/bucketeer/commit/909dd5cc85d707e59426158acb134363be39ee5a))
* add none when the tag is empty ([#545](https://github.com/bucketeer-io/bucketeer/issues/545)) ([e63fbc7](https://github.com/bucketeer-io/bucketeer/commit/e63fbc72fdaf01b45197f15abc6e0a0755627e30))
* add pdb setting to batch server ([#504](https://github.com/bucketeer-io/bucketeer/issues/504)) ([706c1d2](https://github.com/bucketeer-io/bucketeer/commit/706c1d26031fa964844d24a06c9bfb609f091a88))
* add placeholder for circuit breaker config ([#515](https://github.com/bucketeer-io/bucketeer/issues/515)) ([b0a33ad](https://github.com/bucketeer-io/bucketeer/commit/b0a33ad8bcedd15512276c7b772056f886f406f1))
* add project url-code to environment url-code ([#657](https://github.com/bucketeer-io/bucketeer/issues/657)) ([2572608](https://github.com/bucketeer-io/bucketeer/commit/2572608d8700ddcd24b061750e8bcb67ba519d6e))
* add redis connection status to health check ([#590](https://github.com/bucketeer-io/bucketeer/issues/590)) ([ca1eb59](https://github.com/bucketeer-io/bucketeer/commit/ca1eb5961a4a97e7c40941f21fae603f2728de09))
* add stop function to be called the app gets the sigterm signal ([#472](https://github.com/bucketeer-io/bucketeer/issues/472)) ([f6a4d62](https://github.com/bucketeer-io/bucketeer/commit/f6a4d6276b0249610c3af7553b37e50ddb880c9a))
* add system admin flag to idtoken ([#776](https://github.com/bucketeer-io/bucketeer/issues/776)) ([7b946c8](https://github.com/bucketeer-io/bucketeer/commit/7b946c8b9b075263aa1c59c80a61342b2c0ca577))
* add temporary implementation to create organization with project ([#594](https://github.com/bucketeer-io/bucketeer/issues/594)) ([ee16a12](https://github.com/bucketeer-io/bucketeer/commit/ee16a120bc44ff442b45d8f08023c57065664e57))
* add tracing settings ([#513](https://github.com/bucketeer-io/bucketeer/issues/513)) ([29250ba](https://github.com/bucketeer-io/bucketeer/commit/29250ba0b05e15c9664f0f1d0aebf2b798ae9493))
* adjust features and segments cache TTL ([#481](https://github.com/bucketeer-io/bucketeer/issues/481)) ([96a90c0](https://github.com/bucketeer-io/bucketeer/commit/96a90c08dbe2c654d15643e1cf24c22fc4632a10))
* batch service helm charts ([#455](https://github.com/bucketeer-io/bucketeer/issues/455)) ([4540403](https://github.com/bucketeer-io/bucketeer/commit/4540403b349e9863f8198a6f33c1bf31049f14dc))
* build dev container base image ([#711](https://github.com/bucketeer-io/bucketeer/issues/711)) ([2f54b68](https://github.com/bucketeer-io/bucketeer/commit/2f54b68b9a3737ee64b53cc3f6e29cd15b0b6464))
* change conditions when creating a progressive rollout ([#712](https://github.com/bucketeer-io/bucketeer/issues/712)) ([79c4eb8](https://github.com/bucketeer-io/bucketeer/commit/79c4eb81c0e995da6e7373702c5cca5ef5afa6e8))
* change metrics events parameter ([#688](https://github.com/bucketeer-io/bucketeer/issues/688)) ([ffe4a8e](https://github.com/bucketeer-io/bucketeer/commit/ffe4a8e86aa32c0e6a83ff3904c74e575cf8d34e))
* change not to save events after the experiment is ended ([#562](https://github.com/bucketeer-io/bucketeer/issues/562)) ([f15d9f4](https://github.com/bucketeer-io/bucketeer/commit/f15d9f467f28b8fa20dad77bc6d01b744a62eb66))
* change to return the object when a project or environment is created ([#567](https://github.com/bucketeer-io/bucketeer/issues/567)) ([a719eb2](https://github.com/bucketeer-io/bucketeer/commit/a719eb277e7bf9984e1a8ee5d00732de096ed49a))
* fix hpa manifests ([#565](https://github.com/bucketeer-io/bucketeer/issues/565)) ([2a624f7](https://github.com/bucketeer-io/bucketeer/commit/2a624f7ea8bacd09767eb65317920ae63c233180))
* fix hpa manifests ([#566](https://github.com/bucketeer-io/bucketeer/issues/566)) ([6b43b12](https://github.com/bucketeer-io/bucketeer/commit/6b43b128149adc078511223fa74b8dc3243b5568))
* improve logs in the services releated to experiments ([#560](https://github.com/bucketeer-io/bucketeer/issues/560)) ([b33c75e](https://github.com/bucketeer-io/bucketeer/commit/b33c75e2d94502e22f10b528368dd58a572a2574))
* **manifests:** add mau partition creator cronjob ([#675](https://github.com/bucketeer-io/bucketeer/issues/675)) ([b63d728](https://github.com/bucketeer-io/bucketeer/commit/b63d7281c96957bd0817123004cca0c314ec3573))
* migrate v1 environment api to v2 in account and apikeycacher ([#485](https://github.com/bucketeer-io/bucketeer/issues/485)) ([d849d89](https://github.com/bucketeer-io/bucketeer/commit/d849d8918eff744088fa5a1d5cb5cacd7d7f01bb))
* migrate v1 environment api to v2 in batch and calculator ([#514](https://github.com/bucketeer-io/bucketeer/issues/514)) ([fdcf7b2](https://github.com/bucketeer-io/bucketeer/commit/fdcf7b2564b29ffba40c4b974839a044e0701012))
* modify environment APIs to write v1 and v2 temporarily ([#484](https://github.com/bucketeer-io/bucketeer/issues/484)) ([021f5d8](https://github.com/bucketeer-io/bucketeer/commit/021f5d8421a037b5b4bd1749ed85da5068d64162))
* remove autoops webhook ([#648](https://github.com/bucketeer-io/bucketeer/issues/648)) ([6eef028](https://github.com/bucketeer-io/bucketeer/commit/6eef028aadf7d89c2f755811053410cfab250bea))
* remove env v1 ([#549](https://github.com/bucketeer-io/bucketeer/issues/549)) ([b48f881](https://github.com/bucketeer-io/bucketeer/commit/b48f8819f6c08c379dad544ff5a6eb44780af314))
* remove env v1 test ([#563](https://github.com/bucketeer-io/bucketeer/issues/563)) ([3137af8](https://github.com/bucketeer-io/bucketeer/commit/3137af841d1bb42e47e1c6193ec5d2d9592825f1))
* remove envoy health check ([#473](https://github.com/bucketeer-io/bucketeer/issues/473)) ([8d6de36](https://github.com/bucketeer-io/bucketeer/commit/8d6de363b292a6b2836f77692495ed365827bf4c))
* remove old account api ([#744](https://github.com/bucketeer-io/bucketeer/issues/744)) ([f3f8c37](https://github.com/bucketeer-io/bucketeer/commit/f3f8c3742486194ee80fc8917e9490ff85c3fb0d))
* remove old account object from code ([#748](https://github.com/bucketeer-io/bucketeer/issues/748)) ([c53e62a](https://github.com/bucketeer-io/bucketeer/commit/c53e62ae31bfbe23a4804817593d020756456e7c))
* remove old batch code ([#505](https://github.com/bucketeer-io/bucketeer/issues/505)) ([2043b66](https://github.com/bucketeer-io/bucketeer/commit/2043b6644a90b553e38017c36dd85ab5673bae79))
* remove python calculator code ([#465](https://github.com/bucketeer-io/bucketeer/issues/465)) ([4a2e094](https://github.com/bucketeer-io/bucketeer/commit/4a2e09429b525efcaed465a71ae65cb9a205cfc4))
* remove python calculator helm charts ([#555](https://github.com/bucketeer-io/bucketeer/issues/555)) ([3464a50](https://github.com/bucketeer-io/bucketeer/commit/3464a509d407a5ed37e6cf307ac08fd373179c75))
* remove target store from batch service ([#507](https://github.com/bucketeer-io/bucketeer/issues/507)) ([8f63f4f](https://github.com/bucketeer-io/bucketeer/commit/8f63f4ff6614398eb36175793708b5bcb9c58c15))
* remove the tag validation for evaluate feature api ([#561](https://github.com/bucketeer-io/bucketeer/issues/561)) ([c910b00](https://github.com/bucketeer-io/bucketeer/commit/c910b003596210561d98015eed1bdcae0dac4611))
* remove unnecessary python proto files ([#570](https://github.com/bucketeer-io/bucketeer/issues/570)) ([ca9af9b](https://github.com/bucketeer-io/bucketeer/commit/ca9af9b1d1e928ba81900ec053f2e93541386f13))
* remove update env v1 test ([#551](https://github.com/bucketeer-io/bucketeer/issues/551)) ([328b38d](https://github.com/bucketeer-io/bucketeer/commit/328b38da2e83c8dc6dbf2743fce04df24e6b1ee5))
* remove webhook table from delete-e2e targets ([#729](https://github.com/bucketeer-io/bucketeer/issues/729)) ([e48dae2](https://github.com/bucketeer-io/bucketeer/commit/e48dae2b24fcc9c080c09c6b190eb2694feea649))
* replace account v1 to v2 when checking the role ([#651](https://github.com/bucketeer-io/bucketeer/issues/651)) ([e50e357](https://github.com/bucketeer-io/bucketeer/commit/e50e3579a6e1cf157ffe2be50b80e93b2c1559e2))
* set empty map when the user data is nil ([#559](https://github.com/bucketeer-io/bucketeer/issues/559)) ([044addd](https://github.com/bucketeer-io/bucketeer/commit/044addd62a9a5ee8a3e3dec5a33a922310594c03))
* shorten flag trigger url ([#624](https://github.com/bucketeer-io/bucketeer/issues/624)) ([a0a7907](https://github.com/bucketeer-io/bucketeer/commit/a0a790767eac5dc9b210413846aa7371b98759b0))
* translate audit logs from Japanese to English ([#547](https://github.com/bucketeer-io/bucketeer/issues/547)) ([4ee213f](https://github.com/bucketeer-io/bucketeer/commit/4ee213f423c58bf3a95381d8901e9e73c00451ef))
* translate the localize file from Japanese to English ([#530](https://github.com/bucketeer-io/bucketeer/issues/530)) ([d169c5b](https://github.com/bucketeer-io/bucketeer/commit/d169c5b74d7e7d46f133b6504ba888a23a79ea7c))
* **ui:** change account api to v2  ([#732](https://github.com/bucketeer-io/bucketeer/issues/732)) ([a013d39](https://github.com/bucketeer-io/bucketeer/commit/a013d393b34c4841aa94ee01aa26da185e150d0b))
* **ui:** enable the search feature for the filter options in the search filter ([#728](https://github.com/bucketeer-io/bucketeer/issues/728)) ([360e771](https://github.com/bucketeer-io/bucketeer/commit/360e771d9bcbb64ee42371203ee01b9cc5641dad))
* **ui:** unify date format between english and japanese ([#695](https://github.com/bucketeer-io/bucketeer/issues/695)) ([2e59f9b](https://github.com/bucketeer-io/bucketeer/commit/2e59f9b6131894ca4fec7cbe974a88a31c52476a))
* update account v2 api for compatibility ([#724](https://github.com/bucketeer-io/bucketeer/issues/724)) ([c7f8d99](https://github.com/bucketeer-io/bucketeer/commit/c7f8d9909176ceebe1af647e9280512f14ff7a2d))
* update console to use environment v2 object ([#528](https://github.com/bucketeer-io/bucketeer/issues/528)) ([37fbaf6](https://github.com/bucketeer-io/bucketeer/commit/37fbaf64ea857aa33410050bccc97de37e590cc0))
* update copyright ([#468](https://github.com/bucketeer-io/bucketeer/issues/468)) ([8939cf5](https://github.com/bucketeer-io/bucketeer/commit/8939cf50015121cc4acc63e6710e381602506bc1))
* update delete-e2e ([#730](https://github.com/bucketeer-io/bucketeer/issues/730)) ([0f0266c](https://github.com/bucketeer-io/bucketeer/commit/0f0266c78ae3448111ccd443867986e69078e25e))
* update generate token process ([#727](https://github.com/bucketeer-io/bucketeer/issues/727)) ([62b04f2](https://github.com/bucketeer-io/bucketeer/commit/62b04f247b129a1ca573f379adb244f6156050a4))
* update hack script mod files ([#668](https://github.com/bucketeer-io/bucketeer/issues/668)) ([2f0971c](https://github.com/bucketeer-io/bucketeer/commit/2f0971c7d04142761ceeb6d84fc72a6fa03fe80b))
* update proto js ([#556](https://github.com/bucketeer-io/bucketeer/issues/556)) ([dbd5d36](https://github.com/bucketeer-io/bucketeer/commit/dbd5d36bde3765a211929fc85b5b8d05907debff))
* update the deprecated kubernetes api ([#564](https://github.com/bucketeer-io/bucketeer/issues/564)) ([1345cb3](https://github.com/bucketeer-io/bucketeer/commit/1345cb33aa7302c49fb727274cf941ea613d0676))
* update the process getting AdminAccount ([#726](https://github.com/bucketeer-io/bucketeer/issues/726)) ([43dddd4](https://github.com/bucketeer-io/bucketeer/commit/43dddd46f42b69e226684e811b15ed9dfe883fed))
* upgrade protoc to 23.4 ([#470](https://github.com/bucketeer-io/bucketeer/issues/470)) ([b88103b](https://github.com/bucketeer-io/bucketeer/commit/b88103b52c0a84805f6195eb4536f2f5cbad2a59))
* use range for templating cronjobs ([#689](https://github.com/bucketeer-io/bucketeer/issues/689)) ([ae03f1e](https://github.com/bucketeer-io/bucketeer/commit/ae03f1e355832c030f2bb02b745369157a3da0f0))


### Features

* add accountV2 api ([#617](https://github.com/bucketeer-io/bucketeer/issues/617)) ([0a4193e](https://github.com/bucketeer-io/bucketeer/commit/0a4193ef4f5e181290b3dbf72bdad15a79ea44cc))
* add accountV2 proto ([#611](https://github.com/bucketeer-io/bucketeer/issues/611)) ([4dbc44c](https://github.com/bucketeer-io/bucketeer/commit/4dbc44cb256668f30bd5d576da62eac7b0a20016))
* add api to get mau summaries ([#554](https://github.com/bucketeer-io/bucketeer/issues/554)) ([cf09fe2](https://github.com/bucketeer-io/bucketeer/commit/cf09fe2d9d2918ce90228fe174dea987b3f0f1f1))
* add auto ops rules cache to event persister ops ([#595](https://github.com/bucketeer-io/bucketeer/issues/595)) ([c3ed7b2](https://github.com/bucketeer-io/bucketeer/commit/c3ed7b24541c82aada4e4a84b40b0056e9cc61cc))
* add cronjob to delete old keys from redis ([#476](https://github.com/bucketeer-io/bucketeer/issues/476)) ([c3e5b7e](https://github.com/bucketeer-io/bucketeer/commit/c3e5b7e910763ebcd997a5b1db06ace302be4c1e))
* add environment id to list accounts filter options ([#709](https://github.com/bucketeer-io/bucketeer/issues/709)) ([333d522](https://github.com/bucketeer-io/bucketeer/commit/333d5220978e76cfbad4cfac946f4af87e2b16d8))
* add environment v2 api ([#482](https://github.com/bucketeer-io/bucketeer/issues/482)) ([203e9f0](https://github.com/bucketeer-io/bucketeer/commit/203e9f029a59e92481e04090e121de2d946b18c9))
* add environment v2 domain and storage ([#480](https://github.com/bucketeer-io/bucketeer/issues/480)) ([1615f84](https://github.com/bucketeer-io/bucketeer/commit/1615f8462c001a4810f9299c1919f05a3b00e6d5))
* add experiments cache to event persister dwh ([#593](https://github.com/bucketeer-io/bucketeer/issues/593)) ([6049adf](https://github.com/bucketeer-io/bucketeer/commit/6049adfdf0f8eab4dc24d4f4ae64ae7ff8328e78))
* add feature switch schedule modal ([#548](https://github.com/bucketeer-io/bucketeer/issues/548)) ([fcacff8](https://github.com/bucketeer-io/bucketeer/commit/fcacff8f1a28cca27f810ec16a3e670700d15c55))
* add GetAccount by environmentID API ([#628](https://github.com/bucketeer-io/bucketeer/issues/628)) ([6bce5f6](https://github.com/bucketeer-io/bucketeer/commit/6bce5f668622a86c3dfce943548fcf12916920f7))
* add GetMyOrganizationsByEmail API ([#725](https://github.com/bucketeer-io/bucketeer/issues/725)) ([239b323](https://github.com/bucketeer-io/bucketeer/commit/239b323307c090bbb4848db651c7b99de247eaa6))
* add name and url_code to project ([#475](https://github.com/bucketeer-io/bucketeer/issues/475)) ([8ba8c42](https://github.com/bucketeer-io/bucketeer/commit/8ba8c4289add17dcfc44ebc7abdabc0da22b6cba))
* add new GetMe API and GetMyOrganizations API ([#663](https://github.com/bucketeer-io/bucketeer/issues/663)) ([12cdb8b](https://github.com/bucketeer-io/bucketeer/commit/12cdb8b2bde0f2143219b24aa5ae5f6f2349f3bb))
* add organization api ([#592](https://github.com/bucketeer-io/bucketeer/issues/592)) ([54f6e40](https://github.com/bucketeer-io/bucketeer/commit/54f6e408e3fed06698777a18ab8565bbc64d27c7))
* add organization proto ([#589](https://github.com/bucketeer-io/bucketeer/issues/589)) ([112f975](https://github.com/bucketeer-io/bucketeer/commit/112f9754dea94c46d93aad99937105bc08e04f83))
* add organization select page and console account object ([#667](https://github.com/bucketeer-io/bucketeer/issues/667)) ([0184fae](https://github.com/bucketeer-io/bucketeer/commit/0184fae855c1bbecf967044cd550c8b2c38c7660))
* batch service ([#450](https://github.com/bucketeer-io/bucketeer/issues/450)) ([163e6a4](https://github.com/bucketeer-io/bucketeer/commit/163e6a46cf552614dea0c8cefda5540209f91b86))
* **batch:** add create partition job ([#672](https://github.com/bucketeer-io/bucketeer/issues/672)) ([fd02799](https://github.com/bucketeer-io/bucketeer/commit/fd0279922b8f61d6a8a4e487f059c8d04cc6115d))
* change rules order ([#710](https://github.com/bucketeer-io/bucketeer/issues/710)) ([972a937](https://github.com/bucketeer-io/bucketeer/commit/972a937a1e25d21878409e1c248f8501d15993fe))
* enable Google Analytics4 ([#501](https://github.com/bucketeer-io/bucketeer/issues/501)) ([82c5fe4](https://github.com/bucketeer-io/bucketeer/commit/82c5fe44a4f92b3d3b8211efb9fab6b480d62eb7))
* enable to list environments and projects by organization id ([#661](https://github.com/bucketeer-io/bucketeer/issues/661)) ([a85a04f](https://github.com/bucketeer-io/bucketeer/commit/a85a04f2fd3a68fba3df9260b88d4ba34bf8c646))
* experiment calculator improvement ([#553](https://github.com/bucketeer-io/bucketeer/issues/553)) ([d39bc2b](https://github.com/bucketeer-io/bucketeer/commit/d39bc2b47e36d68a3ef98845b17b72a602c1edb9))
* flag trigger implementation ([#596](https://github.com/bucketeer-io/bucketeer/issues/596)) ([721cec2](https://github.com/bucketeer-io/bucketeer/commit/721cec2e6a8b76e27eb4a01f2aa8d7cd5c266fa6))
* modify api-gateway service to use in-memory cache when getting apikey ([#506](https://github.com/bucketeer-io/bucketeer/issues/506)) ([57b9490](https://github.com/bucketeer-io/bucketeer/commit/57b94904537643fc1f3015155c9ce26a050c6886))
* progressive rollout ([#550](https://github.com/bucketeer-io/bucketeer/issues/550)) ([400cb7e](https://github.com/bucketeer-io/bucketeer/commit/400cb7ed62155078d18d5df8eba7eb00674dcc2b))
* remove role field from editor object ([#614](https://github.com/bucketeer-io/bucketeer/issues/614)) ([299f2d7](https://github.com/bucketeer-io/bucketeer/commit/299f2d7212bba1affd179a9eb6460336c4e8addb))
* renewal auto operations tab ([#499](https://github.com/bucketeer-io/bucketeer/issues/499)) ([59760ae](https://github.com/bucketeer-io/bucketeer/commit/59760ae63ad57745e888ad564b292837e97e95da))
* separete the mysql config for DDL and DML ([#498](https://github.com/bucketeer-io/bucketeer/issues/498)) ([c71617d](https://github.com/bucketeer-io/bucketeer/commit/c71617de374a5bd7578926f261366e6c37b37f58))
* support rename function for environment ([#546](https://github.com/bucketeer-io/bucketeer/issues/546)) ([920bb8b](https://github.com/bucketeer-io/bucketeer/commit/920bb8ba2758cf20296f0470b83547d00012e86a))
* support rename function for project ([#479](https://github.com/bucketeer-io/bucketeer/issues/479)) ([65f50fd](https://github.com/bucketeer-io/bucketeer/commit/65f50fd12de6376e052adb19c32a9a52a786b78c))
* support rename function for project ([#552](https://github.com/bucketeer-io/bucketeer/issues/552)) ([e315105](https://github.com/bucketeer-io/bucketeer/commit/e3151050fcbf6a69e69ae233a89a0ed5a4284add))
* **ui:** add google analytics ([#334](https://github.com/bucketeer-io/bucketeer/issues/334)) ([d9e5c0e](https://github.com/bucketeer-io/bucketeer/commit/d9e5c0ed8299cf0090381e7a35ca249fd7a18e1c))
* **ui:** audit log entity filter ([#680](https://github.com/bucketeer-io/bucketeer/issues/680)) ([b92cbcf](https://github.com/bucketeer-io/bucketeer/commit/b92cbcfa1514dca0ec7072e8886f63f11d6c7264))
* **ui:** flag triggers ([#631](https://github.com/bucketeer-io/bucketeer/issues/631)) ([cd134b7](https://github.com/bucketeer-io/bucketeer/commit/cd134b726671c94dfba76e05618264a0f9435f07))


### Bug Fixes

* account e2e test fails ([#623](https://github.com/bucketeer-io/bucketeer/issues/623)) ([79191b9](https://github.com/bucketeer-io/bucketeer/commit/79191b98d8bd3bd2079a6d00f96d1c50ee69b5d9))
* account not being display on the accounts page ([#753](https://github.com/bucketeer-io/bucketeer/issues/753)) ([1b0721f](https://github.com/bucketeer-io/bucketeer/commit/1b0721fbdd32a8e280e4bdfb11cc5b63ff7f6cbb))
* auto operation already triggered error ([#509](https://github.com/bucketeer-io/bucketeer/issues/509)) ([96101bc](https://github.com/bucketeer-io/bucketeer/commit/96101bcc37e9ca14ddfeabc94a6ce206de3f1442))
* batch domain-event-informer ([#613](https://github.com/bucketeer-io/bucketeer/issues/613)) ([b9bf3d1](https://github.com/bucketeer-io/bucketeer/commit/b9bf3d1407dea5179cbd35b67259e1a57dffee16))
* batch server cannot execute ddl to mysql ([#632](https://github.com/bucketeer-io/bucketeer/issues/632)) ([a1d77f6](https://github.com/bucketeer-io/bucketeer/commit/a1d77f6bcc600ae168500ec4e910ac5f20111dab))
* batch service process timeout ([#634](https://github.com/bucketeer-io/bucketeer/issues/634)) ([9839fff](https://github.com/bucketeer-io/bucketeer/commit/9839fff71a7eccb527f4b0ffe8086a9383ed28d0))
* bigquery fails when the value is null ([#557](https://github.com/bucketeer-io/bucketeer/issues/557)) ([bc918b7](https://github.com/bucketeer-io/bucketeer/commit/bc918b70ad50f9510a2fc5227e988df3dc8ab802))
* calculator envoy health check ([#474](https://github.com/bucketeer-io/bucketeer/issues/474)) ([aa6bc44](https://github.com/bucketeer-io/bucketeer/commit/aa6bc441e6a8fc45e30c52475a9370c470196a64))
* cannot delete or update a parent row when deleting e2e data ([#627](https://github.com/bucketeer-io/bucketeer/issues/627)) ([c6b72b8](https://github.com/bucketeer-io/bucketeer/commit/c6b72b8b9d092f7bc03bd0db5649b44f7376102d))
* change the api-gateway metrics label ([#662](https://github.com/bucketeer-io/bucketeer/issues/662)) ([574b2c7](https://github.com/bucketeer-io/bucketeer/commit/574b2c76e0d809833cfd7dd24e7655bbff8d7f6e))
* crashing in the localizer ([#619](https://github.com/bucketeer-io/bucketeer/issues/619)) ([25176b1](https://github.com/bucketeer-io/bucketeer/commit/25176b17f837fbeb8a3ecdc04e843cfd572a205c))
* dispatch workflow fails if commit message contains multi-lines ([#693](https://github.com/bucketeer-io/bucketeer/issues/693)) ([eb5d45a](https://github.com/bucketeer-io/bucketeer/commit/eb5d45a25b26f72a4392a599f0709e01b6c0e00d))
* failed to GetAccountV2ByEnvironmentID with empty ID ([#658](https://github.com/bucketeer-io/bucketeer/issues/658)) ([1c9babb](https://github.com/bucketeer-io/bucketeer/commit/1c9babbf1e5d8e5a8623b5b6315f5148b67c7344))
* getEnvironmentV2 fails to get env with empty ID ([#518](https://github.com/bucketeer-io/bucketeer/issues/518)) ([05338a8](https://github.com/bucketeer-io/bucketeer/commit/05338a87509da75cbd39e9aba5dd0905da77f2b8))
* incorrect experiment result when running multiple goals ([#558](https://github.com/bucketeer-io/bucketeer/issues/558)) ([df11351](https://github.com/bucketeer-io/bucketeer/commit/df113516609457e3024153140dbf68d9ac4651aa))
* invalid environment url code in trial project ([#655](https://github.com/bucketeer-io/bucketeer/issues/655)) ([8ced92e](https://github.com/bucketeer-io/bucketeer/commit/8ced92e0e31394912aa29b11903a7a3564bca493))
* invalid mysql connection when using transaction ([#755](https://github.com/bucketeer-io/bucketeer/issues/755)) ([cb75f9d](https://github.com/bucketeer-io/bucketeer/commit/cb75f9dc0dd4a5ddfc0478ed1902bd259a41695b))
* omitempty not being removed in the proto subdirectories ([#775](https://github.com/bucketeer-io/bucketeer/issues/775)) ([0108e72](https://github.com/bucketeer-io/bucketeer/commit/0108e725988254017b4ecc9772ab5ee40d7bcc14))
* preStop hook in the api and web gateway ([#471](https://github.com/bucketeer-io/bucketeer/issues/471)) ([d101811](https://github.com/bucketeer-io/bucketeer/commit/d101811e84713aa68fb0391e782fb49a0985eb5c))
* progress rollout fails due to wrong conditions ([#718](https://github.com/bucketeer-io/bucketeer/issues/718)) ([e352412](https://github.com/bucketeer-io/bucketeer/commit/e3524124f0df530e5215541b5e5881b2a49fce44))
* project hack script not creating environment correctly ([#568](https://github.com/bucketeer-io/bucketeer/issues/568)) ([a57505f](https://github.com/bucketeer-io/bucketeer/commit/a57505f9f58ef26a8c212da419f761ac0cf11bd6))
* rename sql file ([#630](https://github.com/bucketeer-io/bucketeer/issues/630)) ([b075f72](https://github.com/bucketeer-io/bucketeer/commit/b075f72480b70ec22de79eb9c68ce9c0c0c83d75))
* show stop experiment in experiment list action ([#690](https://github.com/bucketeer-io/bucketeer/issues/690)) ([3c60dc9](https://github.com/bucketeer-io/bucketeer/commit/3c60dc90663d4241d7be40a48afc6d43c365895b))
* the component will not refresh when incorrect envID is in localstorage ([#529](https://github.com/bucketeer-io/bucketeer/issues/529)) ([36b5c5f](https://github.com/bucketeer-io/bucketeer/commit/36b5c5fc397ea42b5cf81df6dcb7d76f82520f56))
* **ui:** audit log date range position ([#697](https://github.com/bucketeer-io/bucketeer/issues/697)) ([2e8c285](https://github.com/bucketeer-io/bucketeer/commit/2e8c2855b4992dfa18b1ed861237febfb1c7904a))
* **ui:** auditlog action filter not working on admin page ([#731](https://github.com/bucketeer-io/bucketeer/issues/731)) ([1cc2f04](https://github.com/bucketeer-io/bucketeer/commit/1cc2f04e71f01c12f53162ac4e5dd1145c00271e))
* **ui:** column alignment on the experiment results tab ([#569](https://github.com/bucketeer-io/bucketeer/issues/569)) ([d17ba76](https://github.com/bucketeer-io/bucketeer/commit/d17ba768b4d8955bf216f1590f5d2da2d9919483))
* **ui:** documentation link ([#621](https://github.com/bucketeer-io/bucketeer/issues/621)) ([e970111](https://github.com/bucketeer-io/bucketeer/commit/e970111154784f8d23f25cde2a1d84a87d8f280b))
* **ui:** search filter options break when the same filter is selected ([#734](https://github.com/bucketeer-io/bucketeer/issues/734)) ([84b7719](https://github.com/bucketeer-io/bucketeer/commit/84b7719cdc06e17117e2d94d063560611ec90df5))
* **ui:** sort auto operations list by scheduled date. ([#615](https://github.com/bucketeer-io/bucketeer/issues/615)) ([54386a1](https://github.com/bucketeer-io/bucketeer/commit/54386a1b365cdb8d7fe17aea586e3b127c334235))
* **ui:** update targeting rule with multiple clause ([#591](https://github.com/bucketeer-io/bucketeer/issues/591)) ([ab0939c](https://github.com/bucketeer-io/bucketeer/commit/ab0939c6adf4d4a07ef59ced6c134fb03377ffae))
* unable create trial project ([#743](https://github.com/bucketeer-io/bucketeer/issues/743)) ([8a20e17](https://github.com/bucketeer-io/bucketeer/commit/8a20e17a663d712175743d5ea9a8327f4dc7d20d))
* unable to fetch all orgs when user is system admin ([#674](https://github.com/bucketeer-io/bucketeer/issues/674)) ([e93eeeb](https://github.com/bucketeer-io/bucketeer/commit/e93eeebffe3d6d0d12efddcf3d149ecb8b665396))
* unable to filter account list by roles ([#733](https://github.com/bucketeer-io/bucketeer/issues/733)) ([e5f1284](https://github.com/bucketeer-io/bucketeer/commit/e5f1284433289c9cfc006271fbaba5f1759ca169))
* unable to get GA ID from envvar ([#500](https://github.com/bucketeer-io/bucketeer/issues/500)) ([6bf7f57](https://github.com/bucketeer-io/bucketeer/commit/6bf7f57f75c5c8f2f8cfd1eca6a836b39755aaae))
* unknown column 'is_in_use_status' in 'having clause' ([#739](https://github.com/bucketeer-io/bucketeer/issues/739)) ([fc81930](https://github.com/bucketeer-io/bucketeer/commit/fc8193048caa26e883269e43c485ea13bc6826a3))
* validation while creating a progressive rollout ([#629](https://github.com/bucketeer-io/bucketeer/issues/629)) ([6f9313b](https://github.com/bucketeer-io/bucketeer/commit/6f9313b38011ce307c2a2d97134095158e4c489e))
* variation name is empty ([#502](https://github.com/bucketeer-io/bucketeer/issues/502)) ([e8c8a42](https://github.com/bucketeer-io/bucketeer/commit/e8c8a42b1019e812539147f1ddde0102877e0f1b))


### Performance Improvements

* improve redis load in the event persisters ([#597](https://github.com/bucketeer-io/bucketeer/issues/597)) ([cb8324d](https://github.com/bucketeer-io/bucketeer/commit/cb8324dc7ca851dd050bdad5b1ca69f4069966d8))
* modify api-gateway to fetch feature flags cache from redis without single flight ([#508](https://github.com/bucketeer-io/bucketeer/issues/508)) ([bb38e09](https://github.com/bucketeer-io/bucketeer/commit/bb38e09d0a0f5258a32954bd383deb5a2d868ed1))


### Reverts

* chore replace account v1 to v2 when checking the role ([#656](https://github.com/bucketeer-io/bucketeer/issues/656)) ([d586b71](https://github.com/bucketeer-io/bucketeer/commit/d586b71429130f748a6bb0ec9d3922a87310c5a8))

## [0.3.0](https://github.com/bucketeer-io/bucketeer/compare/v0.2.0...v0.3.0) (2023-07-13)


### Features

* add experiment calculator manifest chart ([#420](https://github.com/bucketeer-io/bucketeer/issues/420)) ([0789029](https://github.com/bucketeer-io/bucketeer/commit/078902977e54e171f2c4a6d18366bcb5a479cb19))
* rewrite python calculator service in golang ([#395](https://github.com/bucketeer-io/bucketeer/issues/395)) ([bc0f652](https://github.com/bucketeer-io/bucketeer/commit/bc0f652fd26d861a50982937bf26b4758a22d0bb))
* **ui:** add copy user ids feature in the flag targeting ([#271](https://github.com/bucketeer-io/bucketeer/issues/271)) ([eaaf349](https://github.com/bucketeer-io/bucketeer/commit/eaaf349f2cb23950bbc49feaa7f06f2e1698ba61))
* **ui:** add prerequisites in targeting ([#209](https://github.com/bucketeer-io/bucketeer/issues/209)) ([0db448f](https://github.com/bucketeer-io/bucketeer/commit/0db448fa37f49ab55b0d1dbd5b9be1efbb8fccd4))
* **ui:** add the tag filter to the search filter options ([#177](https://github.com/bucketeer-io/bucketeer/issues/177)) ([3a918da](https://github.com/bucketeer-io/bucketeer/commit/3a918da786c467cc5545a99fdeb315299c863864))
* **ui:** add the time range filter in the audit logs search ([#259](https://github.com/bucketeer-io/bucketeer/issues/259)) ([f80c49d](https://github.com/bucketeer-io/bucketeer/commit/f80c49d72230e9841acc462100ffc29b660e00cc))
* **ui:** add time range menu in the evaluation tab ([#333](https://github.com/bucketeer-io/bucketeer/issues/333)) ([6e082b0](https://github.com/bucketeer-io/bucketeer/commit/6e082b093b188a2c85d4e79f484875f46bf16891))
* **ui:** add webhook admin ([#243](https://github.com/bucketeer-io/bucketeer/issues/243)) ([33abd69](https://github.com/bucketeer-io/bucketeer/commit/33abd69348f78f885b107aa9bc4651bae96edc8b))
* **ui:** show which flag the segment user is using when deleting or updating it ([#272](https://github.com/bucketeer-io/bucketeer/issues/272)) ([0ea2d1a](https://github.com/bucketeer-io/bucketeer/commit/0ea2d1a23a1e6b8dbbd38902dd9084c2bd17b6d0))


### Bug Fixes

* change GetEvaluations request field ([#461](https://github.com/bucketeer-io/bucketeer/issues/461)) ([d98e147](https://github.com/bucketeer-io/bucketeer/commit/d98e1471b29785f882269706b98091eff2b9f618))
* environment is not found error during operation of apikey-cacher ([#458](https://github.com/bucketeer-io/bucketeer/issues/458)) ([9414dc8](https://github.com/bucketeer-io/bucketeer/commit/9414dc84f73e90ea6fab993fbc4321e532aa75c7))
* evaluate prerequisite features correctly ([#219](https://github.com/bucketeer-io/bucketeer/issues/219)) ([e295d82](https://github.com/bucketeer-io/bucketeer/commit/e295d82ac2a23eaf525b871ff88ba96a69d4741f))
* eventcounter doesn't return goal counts ([#176](https://github.com/bucketeer-io/bucketeer/issues/176)) ([80ca712](https://github.com/bucketeer-io/bucketeer/commit/80ca7129fdc24004cf0c3b55668a3fd6fdeb6c37))
* flush timeout setting not working ([#146](https://github.com/bucketeer-io/bucketeer/issues/146)) ([4e68977](https://github.com/bucketeer-io/bucketeer/commit/4e68977a3fdb7ce7e4140cf14339c135c6e7e275))
* goal event not being acknowledged correctly ([#159](https://github.com/bucketeer-io/bucketeer/issues/159)) ([38b9bd0](https://github.com/bucketeer-io/bucketeer/commit/38b9bd0f896dfad53af69b6b296bfc0655981258))
* insert same prerequisite features twice ([#205](https://github.com/bucketeer-io/bucketeer/issues/205)) ([46f71c5](https://github.com/bucketeer-io/bucketeer/commit/46f71c5c91865287f247f1d7a90ef7f852e39325))
* insert timestamp correctly in bigquery ([#173](https://github.com/bucketeer-io/bucketeer/issues/173)) ([6f2befc](https://github.com/bucketeer-io/bucketeer/commit/6f2befc51e266cd0ab1c85e97c65c3f36b9f6da7))
* internal error when there are no counts for evaluation time-series count ([#184](https://github.com/bucketeer-io/bucketeer/issues/184)) ([8cf8a0a](https://github.com/bucketeer-io/bucketeer/commit/8cf8a0a48feb427133fa4e848f68c917208acfd1))
* invalid message type in the api-gateway ([#157](https://github.com/bucketeer-io/bucketeer/issues/157)) ([a3a7a84](https://github.com/bucketeer-io/bucketeer/commit/a3a7a84deca6eafcb449d329526181963090dd36))
* mau count yearMonth not matching to the table partition format ([#148](https://github.com/bucketeer-io/bucketeer/issues/148)) ([0323b84](https://github.com/bucketeer-io/bucketeer/commit/0323b84271b63bc86981f78c5c557bcb8fa4ef52))
* metrics events count is not saved to prometheus ([#220](https://github.com/bucketeer-io/bucketeer/issues/220)) ([0068c05](https://github.com/bucketeer-io/bucketeer/commit/0068c0564f01d5b08c995eee6fa2bf250175ef68))
* missing tag property in the domain event for feature flag ([#210](https://github.com/bucketeer-io/bucketeer/issues/210)) ([fbed22f](https://github.com/bucketeer-io/bucketeer/commit/fbed22fc5321c4ee91ba50710ed482da9827d01b))
* mysql error alerts when the auto ops rule is already triggered ([#196](https://github.com/bucketeer-io/bucketeer/issues/196)) ([cdd8cb6](https://github.com/bucketeer-io/bucketeer/commit/cdd8cb6edbf9472997bd0fa89d4ba092364c21e4))
* nil pointer if Reason field is nil ([#262](https://github.com/bucketeer-io/bucketeer/issues/262)) ([90244de](https://github.com/bucketeer-io/bucketeer/commit/90244de44a8cac70b148bac9792540c2a6794a23))
* not found error being reported as fail error ([#186](https://github.com/bucketeer-io/bucketeer/issues/186)) ([bebb0b7](https://github.com/bucketeer-io/bucketeer/commit/bebb0b76a363dad4613158133637337bb38f5d2b))
* OOM while trying to delete a segment ([#297](https://github.com/bucketeer-io/bucketeer/issues/297)) ([2dd94b6](https://github.com/bucketeer-io/bucketeer/commit/2dd94b67c5bdb91f42896787c089fca914508ef9))
* prerequisite list is always empty ([#201](https://github.com/bucketeer-io/bucketeer/issues/201)) ([8f4d7d0](https://github.com/bucketeer-io/bucketeer/commit/8f4d7d0aee61ea16772332c28c647c0062aa4d3e))
* tag filter is not working in the feature flag list ([#394](https://github.com/bucketeer-io/bucketeer/issues/394)) ([9c7cb34](https://github.com/bucketeer-io/bucketeer/commit/9c7cb3461ee7f580b6cc6d42ed939fef8d2563be))
* **ui:** assertion error when saving an auto ops rule ([#238](https://github.com/bucketeer-io/bucketeer/issues/238)) ([0cc348d](https://github.com/bucketeer-io/bucketeer/commit/0cc348db4b1f88213abbe65f5802a505e4c07e2b))
* **ui:** auto ops validation ([#171](https://github.com/bucketeer-io/bucketeer/issues/171)) ([775e3d4](https://github.com/bucketeer-io/bucketeer/commit/775e3d4b352c14f533685a2b5dbe6094cef7ede8))
* **ui:** date text only shows in japanese ([#234](https://github.com/bucketeer-io/bucketeer/issues/234)) ([417bbeb](https://github.com/bucketeer-io/bucketeer/commit/417bbebc46b03e026aa28f6d3d05b316bacb0d0d))
* **ui:** rollout percentage not displaying correctly on firefox ([#423](https://github.com/bucketeer-io/bucketeer/issues/423)) ([7efa83c](https://github.com/bucketeer-io/bucketeer/commit/7efa83c2d1b9dbe88f020f0bfb596ed94b57ffc4))
* **ui:** show tooltip while hovering on variation delete button ([#143](https://github.com/bucketeer-io/bucketeer/issues/143)) ([5c0d7a9](https://github.com/bucketeer-io/bucketeer/commit/5c0d7a926508e3a0bb308b15aa7b64d2a91a11f5))
* **ui:** targeting rule validation ([#149](https://github.com/bucketeer-io/bucketeer/issues/149)) ([6b3c872](https://github.com/bucketeer-io/bucketeer/commit/6b3c87287d0f3f149741fa3a92694d7df0ac4c05))
* **ui:** uncaught type error while switching between experiments ([#156](https://github.com/bucketeer-io/bucketeer/issues/156)) ([d2753a6](https://github.com/bucketeer-io/bucketeer/commit/d2753a6ace2bede3ed85871f5edfa309c1b7bb85))
* **ui:** undefined error while open evaluation tab ([#381](https://github.com/bucketeer-io/bucketeer/issues/381)) ([f66a9f9](https://github.com/bucketeer-io/bucketeer/commit/f66a9f9f60a2c3604a9d83558ed79643297d2dec))
* web-gateway health check ([#456](https://github.com/bucketeer-io/bucketeer/issues/456)) ([13bb755](https://github.com/bucketeer-io/bucketeer/commit/13bb755c0cb0134917148357bdabf0498b6d1998))
* wrong starting time in GetEvaluationTimeseriesCount ([#326](https://github.com/bucketeer-io/bucketeer/issues/326)) ([c848584](https://github.com/bucketeer-io/bucketeer/commit/c848584cd9dbe65985cba3e3b866f1adf2b75e0d))
* wrong user counts in 24 hours ([#338](https://github.com/bucketeer-io/bucketeer/issues/338)) ([cbdec91](https://github.com/bucketeer-io/bucketeer/commit/cbdec91760c15f29079215154c66ba903f104cdf))


### Performance Improvements

* generate the UEID from the features filtered by the tag ([#399](https://github.com/bucketeer-io/bucketeer/issues/399)) ([171cc21](https://github.com/bucketeer-io/bucketeer/commit/171cc215164c5c09cbac6ca078d9edcf1e353aa6))
* improve the user evaluation process ([#316](https://github.com/bucketeer-io/bucketeer/issues/316)) ([12535b8](https://github.com/bucketeer-io/bucketeer/commit/12535b8dde4098c1af70ddb836c7735366296665))


### Reverts

* add manifest files for event persister dwh ([#158](https://github.com/bucketeer-io/bucketeer/issues/158)) ([b0d80de](https://github.com/bucketeer-io/bucketeer/commit/b0d80dec56cbc8110611ddf88cf927303e50c69b))
* e2e for auto ops ([#169](https://github.com/bucketeer-io/bucketeer/issues/169)) ([fe1f6ac](https://github.com/bucketeer-io/bucketeer/commit/fe1f6ac0f2d1d07dbc16ed232fe72cf8d94660fa))


### Miscellaneous

* add api key to log ([#300](https://github.com/bucketeer-io/bucketeer/issues/300)) ([02d0350](https://github.com/bucketeer-io/bucketeer/commit/02d0350c49e701e91d290dded1073d59fdcee24f))
* add archived feature flags to the cache ([#305](https://github.com/bucketeer-io/bucketeer/issues/305)) ([d75a4c1](https://github.com/bucketeer-io/bucketeer/commit/d75a4c124877b838954c756c08f63136ec14217d))
* add audit-log, auto-ops, environment service into the backend module ([#419](https://github.com/bucketeer-io/bucketeer/issues/419)) ([c2e49a7](https://github.com/bucketeer-io/bucketeer/commit/c2e49a76b4962f1d331b77fb7e3978e6db322295))
* add backend service ([#404](https://github.com/bucketeer-io/bucketeer/issues/404)) ([4a9e7f5](https://github.com/bucketeer-io/bucketeer/commit/4a9e7f59e9906720ac1bb5c0ee147aa755bed645))
* add bigquery querier to eventcounter ([#129](https://github.com/bucketeer-io/bucketeer/issues/129)) ([1d86fe8](https://github.com/bucketeer-io/bucketeer/commit/1d86fe83f19333b0c106ecd967fb4f7cf280f291))
* add content_available option for fcm request ([#274](https://github.com/bucketeer-io/bucketeer/issues/274)) ([ac1b9cf](https://github.com/bucketeer-io/bucketeer/commit/ac1b9cfb6717a5297aca4333e5483d516c9bec9a))
* add custom dex web ui ([#319](https://github.com/bucketeer-io/bucketeer/issues/319)) ([f1b6f95](https://github.com/bucketeer-io/bucketeer/commit/f1b6f955711ff8d2ceb6b88e612312c4799771b0))
* add Dependabot ([#329](https://github.com/bucketeer-io/bucketeer/issues/329)) ([9accf03](https://github.com/bucketeer-io/bucketeer/commit/9accf03e92cfbf79ab378566fa04b116022ff2da))
* add event persister service for A/B tests ([#150](https://github.com/bucketeer-io/bucketeer/issues/150)) ([ab6298b](https://github.com/bucketeer-io/bucketeer/commit/ab6298bb1383ad4c708bb3ee37cf2d5115ec9a03))
* add event persister service for auto ops ([#179](https://github.com/bucketeer-io/bucketeer/issues/179)) ([1b2643d](https://github.com/bucketeer-io/bucketeer/commit/1b2643dd609e07c52c7f7a48d8ec0b47ed284f08))
* add event-counter, experiment, feature service into the backend module ([#422](https://github.com/bucketeer-io/bucketeer/issues/422)) ([8be183a](https://github.com/bucketeer-io/bucketeer/commit/8be183aea0d679268215c3ce42f798e76c43c14b))
* add features field to list segments api ([#402](https://github.com/bucketeer-io/bucketeer/issues/402)) ([8079315](https://github.com/bucketeer-io/bucketeer/commit/80793152e4513cc84914efa603edfd5b65653f65))
* add function to get prerequisites ([#284](https://github.com/bucketeer-io/bucketeer/issues/284)) ([2b3545a](https://github.com/bucketeer-io/bucketeer/commit/2b3545ad04592df16034f30d150bb256148b56df))
* add function to refresh features cache ([#293](https://github.com/bucketeer-io/bucketeer/issues/293)) ([154a1ed](https://github.com/bucketeer-io/bucketeer/commit/154a1ed4b007f3fb3fc76810b85a9cb524fa7024))
* add generated files from proto ([#398](https://github.com/bucketeer-io/bucketeer/issues/398)) ([4d9d5ce](https://github.com/bucketeer-io/bucketeer/commit/4d9d5ce19036d647aaec987fe30b0b8127b149a8))
* add GetExperimentGoalCount api to eventcounter ([#155](https://github.com/bucketeer-io/bucketeer/issues/155)) ([c0728ea](https://github.com/bucketeer-io/bucketeer/commit/c0728eabc9341004faf69cd7e917ecd9badb34f3))
* add github issue template ([#278](https://github.com/bucketeer-io/bucketeer/issues/278)) ([afa657a](https://github.com/bucketeer-io/bucketeer/commit/afa657a7cece06ded88d545522f0789d0924d5e5))
* add httpstan dockerfile ([#379](https://github.com/bucketeer-io/bucketeer/issues/379)) ([592ade3](https://github.com/bucketeer-io/bucketeer/commit/592ade3b1f916e774c950f693262990ab20fbf93))
* add javascript source id to the proto message ([#226](https://github.com/bucketeer-io/bucketeer/issues/226)) ([098218b](https://github.com/bucketeer-io/bucketeer/commit/098218b521bb72c870a984d594f9bf8efb5db624))
* add job schedule options to calculator flags ([#161](https://github.com/bucketeer-io/bucketeer/issues/161)) ([fab8cdb](https://github.com/bucketeer-io/bucketeer/commit/fab8cdbd31e65497d01b60941a4d7b573113bf19))
* add language field to Recipient ([#335](https://github.com/bucketeer-io/bucketeer/issues/335)) ([b150407](https://github.com/bucketeer-io/bucketeer/commit/b1504075f9278aec3ab5a3fe3b14cb7dda87eed8))
* add latencySecond field to latencyMetricsEvent ([#265](https://github.com/bucketeer-io/bucketeer/issues/265)) ([1a7d7ad](https://github.com/bucketeer-io/bucketeer/commit/1a7d7ad9e6b988056eeeee70cce8bb8a062fc0dc))
* add log for invalid type event ([#299](https://github.com/bucketeer-io/bucketeer/issues/299)) ([4bc8135](https://github.com/bucketeer-io/bucketeer/commit/4bc813502c1735d8a1938c00fbccbdd5d96b4bd1))
* add logs for debug ([#393](https://github.com/bucketeer-io/bucketeer/issues/393)) ([3de8e76](https://github.com/bucketeer-io/bucketeer/commit/3de8e763207c022efb04d100c91be34dbb9056bc))
* add manifest files for event persister dwh ([#154](https://github.com/bucketeer-io/bucketeer/issues/154)) ([dd7196e](https://github.com/bucketeer-io/bucketeer/commit/dd7196e333bef834397ef043e85acfbe01dfa9a1))
* add manifest files for event persister dwh ([#162](https://github.com/bucketeer-io/bucketeer/issues/162)) ([06812cf](https://github.com/bucketeer-io/bucketeer/commit/06812cff363032d0314836d31cb1ac984bf4e805))
* add manifest for event persister ops ([#174](https://github.com/bucketeer-io/bucketeer/issues/174)) ([8c06c22](https://github.com/bucketeer-io/bucketeer/commit/8c06c22dc0a8b62a9aa422babe0bc8c43407df63))
* add metrics events according to HTTP status code ([#202](https://github.com/bucketeer-io/bucketeer/issues/202)) ([6a53991](https://github.com/bucketeer-io/bucketeer/commit/6a539916a003e117da245b13efa78370d6347fc8))
* add metrics for evaluation ([#317](https://github.com/bucketeer-io/bucketeer/issues/317)) ([c057d9d](https://github.com/bucketeer-io/bucketeer/commit/c057d9d361cf3767d8d879f9af0e1a9229338ef5))
* add migration-mysql, notification, push  service into the backend  module ([#426](https://github.com/bucketeer-io/bucketeer/issues/426)) ([5cd83db](https://github.com/bucketeer-io/bucketeer/commit/5cd83db748d0cc2583899ef6c7b01bf4cc411106))
* add new APIs for ops events using redis ([#165](https://github.com/bucketeer-io/bucketeer/issues/165)) ([76fe837](https://github.com/bucketeer-io/bucketeer/commit/76fe8376f3210cafed23e6644cf1088c77ef1eb5))
* add projectID to sdk metrics ([b207f98](https://github.com/bucketeer-io/bucketeer/commit/b207f98b66021f7b0cc3f1f20f1d9ccc15148f4a))
* add projectID to sdk metrics ([#279](https://github.com/bucketeer-io/bucketeer/issues/279)) ([ccb7b2b](https://github.com/bucketeer-io/bucketeer/commit/ccb7b2ba3f9e571cc5175a7b27ce605e5f0a6434))
* add proto file for progressive rollout ([#285](https://github.com/bucketeer-io/bucketeer/issues/285)) ([d006e2a](https://github.com/bucketeer-io/bucketeer/commit/d006e2a7a72f2dbf8e42c29b90ed17f2588e1553))
* add proto-all command in Makefile ([#424](https://github.com/bucketeer-io/bucketeer/issues/424)) ([7f9daf9](https://github.com/bucketeer-io/bucketeer/commit/7f9daf99e32c0e8183f7ce64308e1517d78826a0))
* add proto-go-check command ([#409](https://github.com/bucketeer-io/bucketeer/issues/409)) ([894d345](https://github.com/bucketeer-io/bucketeer/commit/894d34548546604be04c6d02cabad8d4184a2f31))
* add renovate to cla allowlist ([#225](https://github.com/bucketeer-io/bucketeer/issues/225)) ([9cc3e6f](https://github.com/bucketeer-io/bucketeer/commit/9cc3e6f0257f9b8c03147f4c001aa83ee83f6bc0))
* add routing from other microservices to backend service ([#416](https://github.com/bucketeer-io/bucketeer/issues/416)) ([7493fae](https://github.com/bucketeer-io/bucketeer/commit/7493faeee10d88f362611a1b081e1401c35787c3))
* add routing to event-counter, experiment, feature in the backend module ([#425](https://github.com/bucketeer-io/bucketeer/issues/425)) ([999ba67](https://github.com/bucketeer-io/bucketeer/commit/999ba67fa9283350e935a6c512e437dd11c31e48))
* add routing to migration-mysql, notification, push in the backend module ([#429](https://github.com/bucketeer-io/bucketeer/issues/429)) ([10e1ac7](https://github.com/bucketeer-io/bucketeer/commit/10e1ac7ba2b7639b6a3db5420bb4b58b08fc6272))
* add service account config to manifests ([#151](https://github.com/bucketeer-io/bucketeer/issues/151)) ([4f8db44](https://github.com/bucketeer-io/bucketeer/commit/4f8db44e506a36473de8fb47dc4e9fb636ea8ad3))
* add serviceAccountName spec to deployment template ([#152](https://github.com/bucketeer-io/bucketeer/issues/152)) ([f9b5fe9](https://github.com/bucketeer-io/bucketeer/commit/f9b5fe98cc7302670f83eea74fa4f7335dab2180))
* add several metrics for dwh ([#191](https://github.com/bucketeer-io/bucketeer/issues/191)) ([fcfc122](https://github.com/bucketeer-io/bucketeer/commit/fcfc1225bf4c3dc1440654c11003f53578032572))
* add source id property to metrics event ([#214](https://github.com/bucketeer-io/bucketeer/issues/214)) ([be1aadc](https://github.com/bucketeer-io/bucketeer/commit/be1aadcf8f2da8880684badb75e6dd0e166b5a0a))
* add support for a single evaluation in the evaluate features api ([#228](https://github.com/bucketeer-io/bucketeer/issues/228)) ([b2e8cc5](https://github.com/bucketeer-io/bucketeer/commit/b2e8cc5f80b9792002bdf423a8b662a49a2fe6c1))
* add support for multiple experiment using the same goal id ([#203](https://github.com/bucketeer-io/bucketeer/issues/203)) ([12d7c3f](https://github.com/bucketeer-io/bucketeer/commit/12d7c3f29c0bdea285d20bcf84ca16cbca5a0718))
* add support to filter feature flags by prerequisites ([#230](https://github.com/bucketeer-io/bucketeer/issues/230)) ([87a68c7](https://github.com/bucketeer-io/bucketeer/commit/87a68c79ff78a977c1e42976afd2d8faa43b02c7))
* add tag filtering to evaluation by evaluatedAt ([#318](https://github.com/bucketeer-io/bucketeer/issues/318)) ([9dc6525](https://github.com/bucketeer-io/bucketeer/commit/9dc652537ea718136d14d2070c61b718789771e3))
* add the ability to configure timezone ([#322](https://github.com/bucketeer-io/bucketeer/issues/322)) ([a9010dd](https://github.com/bucketeer-io/bucketeer/commit/a9010dd2e7937eeb8169b998131b1477023d9604))
* add time range option in the proto for evaluation count request ([#291](https://github.com/bucketeer-io/bucketeer/issues/291)) ([f19283b](https://github.com/bucketeer-io/bucketeer/commit/f19283b7952444f4f305ccc3ad7ad20568ae5ea1))
* add TTL to the put function of the cache ([#295](https://github.com/bucketeer-io/bucketeer/issues/295)) ([465e502](https://github.com/bucketeer-io/bucketeer/commit/465e502fbe03a290fd752f718419b1633b2cb8fb))
* add variation name to get evaluations response ([#438](https://github.com/bucketeer-io/bucketeer/issues/438)) ([0faba48](https://github.com/bucketeer-io/bucketeer/commit/0faba487c03c0cc00b7b5b44c1009bd549448140))
* adjust cache TTL temporarily ([#298](https://github.com/bucketeer-io/bucketeer/issues/298)) ([daca964](https://github.com/bucketeer-io/bucketeer/commit/daca96434ac632a7e530283aba1c6ddd43c516df))
* adjust features cache TTL ([#301](https://github.com/bucketeer-io/bucketeer/issues/301)) ([55ca6c0](https://github.com/bucketeer-io/bucketeer/commit/55ca6c080b4cf12d43259c17dc301219785c1267))
* adjust shutdown process ([#432](https://github.com/bucketeer-io/bucketeer/issues/432)) ([b50b9f2](https://github.com/bucketeer-io/bucketeer/commit/b50b9f22b0ffd3faad7205e330c6a9e4e4eb92d3))
* allow calculator image tag to be set individually ([#462](https://github.com/bucketeer-io/bucketeer/issues/462)) ([3cc1175](https://github.com/bucketeer-io/bucketeer/commit/3cc1175c6d8e1ce2bf4bfa4beeb3720f895aca6e))
* auto merge PR automatically ([#330](https://github.com/bucketeer-io/bucketeer/issues/330)) ([8ba3a4f](https://github.com/bucketeer-io/bucketeer/commit/8ba3a4fef30e866f660d41dc2d28c708e3dc7652))
* change apis calculator executes for experiment ([#172](https://github.com/bucketeer-io/bucketeer/issues/172)) ([80bc7b2](https://github.com/bucketeer-io/bucketeer/commit/80bc7b280959bdd9d8ce1b9f0115e03f59efd0d2))
* change auto ops count key format ([#200](https://github.com/bucketeer-io/bucketeer/issues/200)) ([6e2e9dd](https://github.com/bucketeer-io/bucketeer/commit/6e2e9dd1edd5ffcedf16279a1c23fe71feadf36f))
* change evaluation count tab api ([#183](https://github.com/bucketeer-io/bucketeer/issues/183)) ([b4ceb8b](https://github.com/bucketeer-io/bucketeer/commit/b4ceb8b7d73cf5c5a56dfdebb3d81808c92d5bcb))
* change get evaluations response ([#407](https://github.com/bucketeer-io/bucketeer/issues/407)) ([d132227](https://github.com/bucketeer-io/bucketeer/commit/d132227216518177b51f6e89065c57f1af0312ae))
* change getEvaluations response ([#406](https://github.com/bucketeer-io/bucketeer/issues/406)) ([04f8066](https://github.com/bucketeer-io/bucketeer/commit/04f806681909c76833e5e7d5091e6cafa476a030))
* change hpa api version ([#188](https://github.com/bucketeer-io/bucketeer/issues/188)) ([212cbe6](https://github.com/bucketeer-io/bucketeer/commit/212cbe6eca3f1644c86a17fad9ce1f107fa9e8e2))
* change list experiments condition in the event persister ([#460](https://github.com/bucketeer-io/bucketeer/issues/460)) ([66b840d](https://github.com/bucketeer-io/bucketeer/commit/66b840de7bc2d3421421aa7c6c20679212b5972e))
* change service account to be optional in the helm manifest ([#245](https://github.com/bucketeer-io/bucketeer/issues/245)) ([9ec1381](https://github.com/bucketeer-io/bucketeer/commit/9ec13812f2c574ca4a95ca8f58a175d6f3bbc561))
* change service-accounts name ([#358](https://github.com/bucketeer-io/bucketeer/issues/358)) ([73458d6](https://github.com/bucketeer-io/bucketeer/commit/73458d6ecc98a78e8062b6a05d8c766e41b4d89b))
* change service-accounts name in deployment.yaml ([#396](https://github.com/bucketeer-io/bucketeer/issues/396)) ([7a817a9](https://github.com/bucketeer-io/bucketeer/commit/7a817a9dcdbf4960ffc09b0445e407821c113b5f))
* change the wait-interval field in lewagon/wait-on-check-action ([#369](https://github.com/bucketeer-io/bucketeer/issues/369)) ([1c68852](https://github.com/bucketeer-io/bucketeer/commit/1c68852331e3059cf8e60a906d74b7623143a1e2))
* change to always return the error messages in Japanese temporarily ([#218](https://github.com/bucketeer-io/bucketeer/issues/218)) ([b34c7ec](https://github.com/bucketeer-io/bucketeer/commit/b34c7ec8553f50c8756f4e9d781c230eb218f4cd))
* change web-gateway preStop hook ([#296](https://github.com/bucketeer-io/bucketeer/issues/296)) ([3288511](https://github.com/bucketeer-io/bucketeer/commit/3288511f45f2e74150b2d963f97db42ab40cb3eb))
* change web-gateway's LB to L7 ([#251](https://github.com/bucketeer-io/bucketeer/issues/251)) ([42598d6](https://github.com/bucketeer-io/bucketeer/commit/42598d645af807d7de44db81a21b7ed765af2c94))
* configure timezone fields ([#324](https://github.com/bucketeer-io/bucketeer/issues/324)) ([b97bfd3](https://github.com/bucketeer-io/bucketeer/commit/b97bfd352267ed917ac20959636da94e86e665ee))
* **deps:** update contributor-assistant/github-action digest to b2a7f9f ([#247](https://github.com/bucketeer-io/bucketeer/issues/247)) ([fcd566d](https://github.com/bucketeer-io/bucketeer/commit/fcd566d78a8190120ebcd38244ea5a5d0fbdea16))
* **deps:** update dependency autoprefixer to v9.8.8 ([#304](https://github.com/bucketeer-io/bucketeer/issues/304)) ([60cce4e](https://github.com/bucketeer-io/bucketeer/commit/60cce4ea8fadac4061358810f33e71e7bce48c52))
* **deps:** update dependency cython to v0.29.35 ([#371](https://github.com/bucketeer-io/bucketeer/issues/371)) ([e6281ed](https://github.com/bucketeer-io/bucketeer/commit/e6281edfced5379df0d9809496142ecf8eacbd3b))
* **deps:** update dependency numpy to v1.22.0 [security] ([#222](https://github.com/bucketeer-io/bucketeer/issues/222)) ([5909420](https://github.com/bucketeer-io/bucketeer/commit/59094206a886d852c386b82d19103b87b8063fca))
* **deps:** update dependency protobuf to v3.20.2 [security] ([#221](https://github.com/bucketeer-io/bucketeer/issues/221)) ([dfca8e8](https://github.com/bucketeer-io/bucketeer/commit/dfca8e8886a76468e2f781e673d4d26d00a3b751))
* **deps:** update google.golang.org/genproto digest to 7f2fa6f ([#248](https://github.com/bucketeer-io/bucketeer/issues/248)) ([604f3bc](https://github.com/bucketeer-io/bucketeer/commit/604f3bca6ced9c5230b233cef5312fea7b537084))
* disable analysis side menu ([#170](https://github.com/bucketeer-io/bucketeer/issues/170)) ([b5ed7fa](https://github.com/bucketeer-io/bucketeer/commit/b5ed7faab3cbdd83a9930a50a8513e7b75ca2d30))
* enable cache in setup-go ([#437](https://github.com/bucketeer-io/bucketeer/issues/437)) ([e001aea](https://github.com/bucketeer-io/bucketeer/commit/e001aeab6bc9e933d5b1b9b21129f097f324281c))
* fix backend envoy-config ([#427](https://github.com/bucketeer-io/bucketeer/issues/427)) ([c98384f](https://github.com/bucketeer-io/bucketeer/commit/c98384f18d43076ecb9e10ef50998c642b2e4025))
* fix mockgen version ([#452](https://github.com/bucketeer-io/bucketeer/issues/452)) ([9396d76](https://github.com/bucketeer-io/bucketeer/commit/9396d76f328ce1cc5b637c16a3c4874d5713ad11))
* fix service account in helm charts ([#280](https://github.com/bucketeer-io/bucketeer/issues/280)) ([5deee42](https://github.com/bucketeer-io/bucketeer/commit/5deee42d2c3b855d9f9b02f98c3d7f8825493b79))
* get evaluation count in hourly timestamp ([#252](https://github.com/bucketeer-io/bucketeer/issues/252)) ([8783f84](https://github.com/bucketeer-io/bucketeer/commit/8783f84739f246fb21c4fa45acaa889f16e0b419))
* improve api-gateway health check ([#457](https://github.com/bucketeer-io/bucketeer/issues/457)) ([119308f](https://github.com/bucketeer-io/bucketeer/commit/119308f00451ae84f27571a55584e18a235f1ebe))
* include the current hour in GetEvaluationTimeseriesCount ([#421](https://github.com/bucketeer-io/bucketeer/issues/421)) ([258d2ac](https://github.com/bucketeer-io/bucketeer/commit/258d2acaa7606059e1fb42e32fbd17cf38fff3f8))
* mark event id as a failure when failed to marshal ([#166](https://github.com/bucketeer-io/bucketeer/issues/166)) ([5111d2c](https://github.com/bucketeer-io/bucketeer/commit/5111d2c9cfdbe652ca8d4696f19b1f486a747ba4))
* mark id as a fail when appends requests is failed ([#168](https://github.com/bucketeer-io/bucketeer/issues/168)) ([bfe1116](https://github.com/bucketeer-io/bucketeer/commit/bfe1116ce15f11fc26c9348dd3a9e107ffe4b6d8))
* modify timeout second of web-gateway backend ([#270](https://github.com/bucketeer-io/bucketeer/issues/270)) ([c8d0296](https://github.com/bucketeer-io/bucketeer/commit/c8d0296d727cf8ee9040b8e48050fc7cb82c6c5e))
* move function saving metrics event to gateway ([#216](https://github.com/bucketeer-io/bucketeer/issues/216)) ([f74eacb](https://github.com/bucketeer-io/bucketeer/commit/f74eacbc8b3bcc5891d5b09b59e685e92b0d66ed))
* move upsert MAU implementation to user persister ([#195](https://github.com/bucketeer-io/bucketeer/issues/195)) ([8aa7199](https://github.com/bucketeer-io/bucketeer/commit/8aa71999542a1fb0e0267b80b4e996bc982bb2bc))
* precompile stan model ([#454](https://github.com/bucketeer-io/bucketeer/issues/454)) ([59190d6](https://github.com/bucketeer-io/bucketeer/commit/59190d68fb836e714ce3421b6293f694ffff2602))
* publish GetEvaluationTimeseriesCountV2 API ([#332](https://github.com/bucketeer-io/bucketeer/issues/332)) ([48ca696](https://github.com/bucketeer-io/bucketeer/commit/48ca696875fbacc3019407326321055984f7ac84))
* remove bigtable client ([#237](https://github.com/bucketeer-io/bucketeer/issues/237)) ([9736bcf](https://github.com/bucketeer-io/bucketeer/commit/9736bcf48b5ad1a8f72d670e8f9718911e180510))
* remove bigtable from event persister DWH ([#215](https://github.com/bucketeer-io/bucketeer/issues/215)) ([f95fb01](https://github.com/bucketeer-io/bucketeer/commit/f95fb01b4b014ab980b2147c91711e8d514a379b))
* remove default values from hpa ([#189](https://github.com/bucketeer-io/bucketeer/issues/189)) ([b6b7872](https://github.com/bucketeer-io/bucketeer/commit/b6b78720076739101d7d6c8c3a13a944eed4bee6))
* remove event persister goal events kafka ([#198](https://github.com/bucketeer-io/bucketeer/issues/198)) ([d046b7e](https://github.com/bucketeer-io/bucketeer/commit/d046b7e1f564e496ca4c099418f987d77c90a0d3))
* remove feature persisting user data ([#288](https://github.com/bucketeer-io/bucketeer/issues/288)) ([37952d3](https://github.com/bucketeer-io/bucketeer/commit/37952d30fbaeb667b41c5aefa10b2992f1fe7ac5))
* remove feature-tag-cacher ([#302](https://github.com/bucketeer-io/bucketeer/issues/302)) ([6a939c5](https://github.com/bucketeer-io/bucketeer/commit/6a939c51263ebf289035d7b70ed3457f0962c013))
* remove goal batch transformer service ([#153](https://github.com/bucketeer-io/bucketeer/issues/153)) ([e0f8fea](https://github.com/bucketeer-io/bucketeer/commit/e0f8fea75ba9161cdc71a3bb9050b8f107458b1a))
* remove kafka and druid helm manifests ([#193](https://github.com/bucketeer-io/bucketeer/issues/193)) ([1127b16](https://github.com/bucketeer-io/bucketeer/commit/1127b169dc89509fee52fa71b1cbd1a661e2d90f))
* remove kafka and druid implementation ([#192](https://github.com/bucketeer-io/bucketeer/issues/192)) ([8f23953](https://github.com/bucketeer-io/bucketeer/commit/8f23953e8cb00ca8169f04f26d9111fb50db1977))
* remove needless helm values.yaml ([#182](https://github.com/bucketeer-io/bucketeer/issues/182)) ([165247f](https://github.com/bucketeer-io/bucketeer/commit/165247f136d7b1da70983e1a087f8f3d599c2a86))
* remove renovate.json ([#372](https://github.com/bucketeer-io/bucketeer/issues/372)) ([a0274c0](https://github.com/bucketeer-io/bucketeer/commit/a0274c05917efaba2ef99c8f551cc5aa481c3bb9))
* remove unused command ([#431](https://github.com/bucketeer-io/bucketeer/issues/431)) ([f24db62](https://github.com/bucketeer-io/bucketeer/commit/f24db628ff4485b14ead1368e6d24c8b24fa62e3))
* remove unused services from helm chart ([#430](https://github.com/bucketeer-io/bucketeer/issues/430)) ([4d0fc5f](https://github.com/bucketeer-io/bucketeer/commit/4d0fc5f3fb5a2007e17c76d4e1a48a5cd02ae76f))
* remove user metadata from user event ([#292](https://github.com/bucketeer-io/bucketeer/issues/292)) ([cbe7809](https://github.com/bucketeer-io/bucketeer/commit/cbe7809085b8071eae20c73c4ad39d761d73eb95))
* remove user service ([#290](https://github.com/bucketeer-io/bucketeer/issues/290)) ([3bf4c9a](https://github.com/bucketeer-io/bucketeer/commit/3bf4c9aa301cd662691ee6f12c00ff5729cf4a79))
* rename event persister kafka to evaluation count ([#199](https://github.com/bucketeer-io/bucketeer/issues/199)) ([c52baa9](https://github.com/bucketeer-io/bucketeer/commit/c52baa9ff71015163e71743b9d75e7fe14f5b0a9))
* replace existing GetEvaluationTimeseriesCount with new implementation ([#383](https://github.com/bucketeer-io/bucketeer/issues/383)) ([4ba4223](https://github.com/bucketeer-io/bucketeer/commit/4ba4223c553103e881ae4638a6ccdb27fe4640c8))
* run make gen ([#410](https://github.com/bucketeer-io/bucketeer/issues/410)) ([8ee4e35](https://github.com/bucketeer-io/bucketeer/commit/8ee4e35cd33d0e3cb77b8ffd5cc993db6faa79a8))
* run make gen_proto ([#412](https://github.com/bucketeer-io/bucketeer/issues/412)) ([a0a2127](https://github.com/bucketeer-io/bucketeer/commit/a0a2127ddf0bf59d02bed5efbe6be57146e117c0))
* run make proto-go ([#408](https://github.com/bucketeer-io/bucketeer/issues/408)) ([d8dc6c4](https://github.com/bucketeer-io/bucketeer/commit/d8dc6c4f169b2425d4643c755a12fe50a9733b7b))
* save evaluation count in hourly timestamp ([#249](https://github.com/bucketeer-io/bucketeer/issues/249)) ([41c84f2](https://github.com/bucketeer-io/bucketeer/commit/41c84f2adcc76eedd11970cc942f4c34c27847a0))
* set mysql client's connection max idle time instead of lifetime ([#260](https://github.com/bucketeer-io/bucketeer/issues/260)) ([9c0e6e4](https://github.com/bucketeer-io/bucketeer/commit/9c0e6e49f23dcdba216aecca826ccd69c588a982))
* stop updating pip dependency group ([#360](https://github.com/bucketeer-io/bucketeer/issues/360)) ([529a6ee](https://github.com/bucketeer-io/bucketeer/commit/529a6eef9649d1ed22cc321455d9086fe0ffc327))
* stop upserting daily evaluation count keys ([#382](https://github.com/bucketeer-io/bucketeer/issues/382)) ([1e05976](https://github.com/bucketeer-io/bucketeer/commit/1e0597674d14e7d45ba6226085ccb060bc62c2e7))
* support multi language for audit log ([#336](https://github.com/bucketeer-io/bucketeer/issues/336)) ([adb9e2d](https://github.com/bucketeer-io/bucketeer/commit/adb9e2dc23e35bae3a2c73cd724346048597f23c))
* support multiple languages in error messages ([#208](https://github.com/bucketeer-io/bucketeer/issues/208)) ([fd71214](https://github.com/bucketeer-io/bucketeer/commit/fd712140c0d792badd3d75208438cc10b70774d4))
* support time range option for evaluation count request ([#307](https://github.com/bucketeer-io/bucketeer/issues/307)) ([6bd1324](https://github.com/bucketeer-io/bucketeer/commit/6bd1324ca662fbb1b6e0b3c6fd08366575f954f0))
* **ui:** add the option to delete values individually in the select menu ([18c1818](https://github.com/bucketeer-io/bucketeer/commit/18c1818952ff3990d6f3451436f1fd1c354d167c))
* **ui:** change page not found design ([#258](https://github.com/bucketeer-io/bucketeer/issues/258)) ([dd0b6f3](https://github.com/bucketeer-io/bucketeer/commit/dd0b6f33935034ccf26dfbaccc40ea454615857c))
* **ui:** disable analysis menu ([#163](https://github.com/bucketeer-io/bucketeer/issues/163)) ([6c774a7](https://github.com/bucketeer-io/bucketeer/commit/6c774a7573c6d7e643bcf0bc70f6800df60f2a1b))
* **ui:** fix typo in the language options ([#236](https://github.com/bucketeer-io/bucketeer/issues/236)) ([c6f0263](https://github.com/bucketeer-io/bucketeer/commit/c6f02633cd3ca17435988a715e298084e3f1a4e4))
* **ui:** make the variation name field required in the feature flag ([#436](https://github.com/bucketeer-io/bucketeer/issues/436)) ([222bcb0](https://github.com/bucketeer-io/bucketeer/commit/222bcb0dd24476b07d27baa7327f1912d0a2e3d0))
* **ui:** set the accept-language in headers ([#213](https://github.com/bucketeer-io/bucketeer/issues/213)) ([eab4d17](https://github.com/bucketeer-io/bucketeer/commit/eab4d17b9e308f1c5090e00a0481ea8ec62afb1d))
* update BigQuery query files ([#175](https://github.com/bucketeer-io/bucketeer/issues/175)) ([ef7b693](https://github.com/bucketeer-io/bucketeer/commit/ef7b69394b5a67c7aebcd1c550c492b6cd9bda9a))
* update dex to v2.36.0 ([#281](https://github.com/bucketeer-io/bucketeer/issues/281)) ([972a965](https://github.com/bucketeer-io/bucketeer/commit/972a965a4ed3cb75fe233bba993fbb8ea2b735f7))
* update envoy to v1.26.2 ([#459](https://github.com/bucketeer-io/bucketeer/issues/459)) ([ed7a756](https://github.com/bucketeer-io/bucketeer/commit/ed7a756f7f34d6c435ba4655ce4648148d14a31d))
* update js and ts proto files ([#418](https://github.com/bucketeer-io/bucketeer/issues/418)) ([01b1f07](https://github.com/bucketeer-io/bucketeer/commit/01b1f0749a32927e8b6b8c80dabdfddb48602110))
* update the directory for npm in dependabot ([#380](https://github.com/bucketeer-io/bucketeer/issues/380)) ([b36f0ff](https://github.com/bucketeer-io/bucketeer/commit/b36f0ff9dbe745a3c03bfac1b4044b269189e992))
* update the version of Go ([#357](https://github.com/bucketeer-io/bucketeer/issues/357)) ([3ed0e09](https://github.com/bucketeer-io/bucketeer/commit/3ed0e09994b817ddb09ad99b30cab8da344ca092))
* use gomock in uber ([#435](https://github.com/bucketeer-io/bucketeer/issues/435)) ([8e1f4c4](https://github.com/bucketeer-io/bucketeer/commit/8e1f4c4cedd1923c3fa2338449fc6cf360c52826))
* use squash for auto merging ([#354](https://github.com/bucketeer-io/bucketeer/issues/354)) ([2a665b2](https://github.com/bucketeer-io/bucketeer/commit/2a665b2b9f68b422e4ffe119701684b26a47ebc9))


### Build System

* **deps-dev:** bump click from 8.1.2 to 8.1.3 in /python ([#347](https://github.com/bucketeer-io/bucketeer/issues/347)) ([08c5fd1](https://github.com/bucketeer-io/bucketeer/commit/08c5fd13b2cca48c76a4ea44a0d2562bd99fd917))
* **deps-dev:** bump pathspec from 0.9.0 to 0.11.1 in /python ([#343](https://github.com/bucketeer-io/bucketeer/issues/343)) ([65e8460](https://github.com/bucketeer-io/bucketeer/commit/65e84606948bb05886ae0b618b32b3bb7e670c48))
* **deps-dev:** bump postcss from 8.3.11 to 8.4.24 in /ui/web-v2 ([#389](https://github.com/bucketeer-io/bucketeer/issues/389)) ([87d4e3e](https://github.com/bucketeer-io/bucketeer/commit/87d4e3e599db643dadb16610ed926998857f86d9))
* **deps:** bump @improbable-eng/grpc-web in /ui/web-v2 ([#388](https://github.com/bucketeer-io/bucketeer/issues/388)) ([bfb1412](https://github.com/bucketeer-io/bucketeer/commit/bfb141285a1ee2978899f5cc25650e8475753b7f))
* **deps:** bump actions/setup-go from 3 to 4 ([#342](https://github.com/bucketeer-io/bucketeer/issues/342)) ([91c93ab](https://github.com/bucketeer-io/bucketeer/commit/91c93abd07884628f5e4ce46c86847234f9999ad))
* **deps:** bump amannn/action-semantic-pull-request ([#363](https://github.com/bucketeer-io/bucketeer/issues/363)) ([c30e024](https://github.com/bucketeer-io/bucketeer/commit/c30e024167ad92f131b4bcacb05ccd68b4f84e8e))
* **deps:** bump Azure/setup-helm from 1.1 to 3.5 ([#362](https://github.com/bucketeer-io/bucketeer/issues/362)) ([c7f4bc3](https://github.com/bucketeer-io/bucketeer/commit/c7f4bc3f3b3887314d528ff4ca7f6a9c6752c3c8))
* **deps:** bump cloud.google.com/go/bigquery from 1.48.0 to 1.51.2 ([#377](https://github.com/bucketeer-io/bucketeer/issues/377)) ([44ee632](https://github.com/bucketeer-io/bucketeer/commit/44ee632b3c521c010f7bb9bf4207d133d4a42865))
* **deps:** bump cloud.google.com/go/kms from 1.9.0 to 1.11.0 ([#375](https://github.com/bucketeer-io/bucketeer/issues/375)) ([f6577e9](https://github.com/bucketeer-io/bucketeer/commit/f6577e9d56bb870d1e96488f1840926f98ab50c3))
* **deps:** bump cloud.google.com/go/profiler from 0.3.0 to 0.3.1 ([#368](https://github.com/bucketeer-io/bucketeer/issues/368)) ([f638640](https://github.com/bucketeer-io/bucketeer/commit/f638640222ec351cd1c45cc9adab397e5e0ab9cf))
* **deps:** bump cloud.google.com/go/pubsub from 1.28.0 to 1.31.0 ([#376](https://github.com/bucketeer-io/bucketeer/issues/376)) ([b00d7fc](https://github.com/bucketeer-io/bucketeer/commit/b00d7fc5b0f03334b1714a76b58ed53a8280d26f))
* **deps:** bump contrib.go.opencensus.io/exporter/stackdriver ([#448](https://github.com/bucketeer-io/bucketeer/issues/448)) ([dc27019](https://github.com/bucketeer-io/bucketeer/commit/dc27019643189bb2e331c5a14d116a3bc3743c97))
* **deps:** bump deep-equal from 2.0.5 to 2.2.1 in /ui/web-v2 ([#390](https://github.com/bucketeer-io/bucketeer/issues/390)) ([7867ce5](https://github.com/bucketeer-io/bucketeer/commit/7867ce5c9d101ee3190081f062b3d924f2f4e03b))
* **deps:** bump dependabot/fetch-metadata from 1.5.0 to 1.5.1 ([#361](https://github.com/bucketeer-io/bucketeer/issues/361)) ([e2ee850](https://github.com/bucketeer-io/bucketeer/commit/e2ee85010d756add7659d5265b5f2a1c997d671a))
* **deps:** bump dependabot/fetch-metadata from 1.5.1 to 1.6.0 ([#439](https://github.com/bucketeer-io/bucketeer/issues/439)) ([850492d](https://github.com/bucketeer-io/bucketeer/commit/850492d6858794c3b604343dcb208db61310e326))
* **deps:** bump docker/setup-buildx-action from 2.1.0 to 2.5.0 ([#346](https://github.com/bucketeer-io/bucketeer/issues/346)) ([d5e1580](https://github.com/bucketeer-io/bucketeer/commit/d5e158094a8cf397d10ad74e0a630baeab4e1357))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config ([#449](https://github.com/bucketeer-io/bucketeer/issues/449)) ([3a7d96c](https://github.com/bucketeer-io/bucketeer/commit/3a7d96c4b0da95d1730132e137d3ace537cbaf7a))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/kms ([#392](https://github.com/bucketeer-io/bucketeer/issues/392)) ([3007a46](https://github.com/bucketeer-io/bucketeer/commit/3007a460bda1058284a7467833266c3d7b61d1f4))
* **deps:** bump github.com/coreos/go-oidc ([#374](https://github.com/bucketeer-io/bucketeer/issues/374)) ([3e04d8c](https://github.com/bucketeer-io/bucketeer/commit/3e04d8c85080dfb79670f752a7dbabf8376d5539))
* **deps:** bump github.com/go-redis/redis ([#349](https://github.com/bucketeer-io/bucketeer/issues/349)) ([e07cf84](https://github.com/bucketeer-io/bucketeer/commit/e07cf84724fcc3e68514ef3d1ba32c8957fc21d9))
* **deps:** bump github.com/go-sql-driver/mysql from 1.6.0 to 1.7.1 ([#446](https://github.com/bucketeer-io/bucketeer/issues/446)) ([49cb111](https://github.com/bucketeer-io/bucketeer/commit/49cb11145272395a157a9b013895b1f7882bb7db))
* **deps:** bump github.com/googleapis/gax-go/v2 from 2.10.0 to 2.11.0 ([#447](https://github.com/bucketeer-io/bucketeer/issues/447)) ([5167b95](https://github.com/bucketeer-io/bucketeer/commit/5167b9579476bcef7c79d1d061f8abfc597107a3))
* **deps:** bump github.com/lib/pq from 1.10.7 to 1.10.9 ([#365](https://github.com/bucketeer-io/bucketeer/issues/365)) ([0c29238](https://github.com/bucketeer-io/bucketeer/commit/0c292382cacfda4ad121e6b4e355b6e0e8a6b7d4))
* **deps:** bump github.com/mna/redisc from 1.1.2 to 1.3.2 ([#352](https://github.com/bucketeer-io/bucketeer/issues/352)) ([9a5fad3](https://github.com/bucketeer-io/bucketeer/commit/9a5fad38f948e9cfb9ca6e67b62bab8032c00bb5))
* **deps:** bump github.com/prometheus/client_golang ([#364](https://github.com/bucketeer-io/bucketeer/issues/364)) ([1f58081](https://github.com/bucketeer-io/bucketeer/commit/1f5808156fb644d513f6b7c9fcfc9435d1a2b44d))
* **deps:** bump github.com/slack-go/slack from 0.6.4 to 0.12.2 ([#366](https://github.com/bucketeer-io/bucketeer/issues/366)) ([a321c31](https://github.com/bucketeer-io/bucketeer/commit/a321c31dd1f7fa2084e43f25374c2c4695b05d5a))
* **deps:** bump github.com/stretchr/testify from 1.8.1 to 1.8.4 ([#359](https://github.com/bucketeer-io/bucketeer/issues/359)) ([2ece27f](https://github.com/bucketeer-io/bucketeer/commit/2ece27fcdf95d6898422046c554144bd8965bed5))
* **deps:** bump golang.org/x/oauth2 from 0.6.0 to 0.8.0 ([#367](https://github.com/bucketeer-io/bucketeer/issues/367)) ([ec61990](https://github.com/bucketeer-io/bucketeer/commit/ec619908ddbc84406388ec0d61504864d2674190))
* **deps:** bump google-github-actions/auth from 0.8.3 to 1.1.1 ([#340](https://github.com/bucketeer-io/bucketeer/issues/340)) ([5e00ed0](https://github.com/bucketeer-io/bucketeer/commit/5e00ed09076e5374c733b2af33feae21579453d2))
* **deps:** bump google-github-actions/release-please-action ([#344](https://github.com/bucketeer-io/bucketeer/issues/344)) ([2553d6e](https://github.com/bucketeer-io/bucketeer/commit/2553d6ec8a110592cdc77c815e6aad3becc6a423))
* **deps:** bump google-github-actions/release-please-action ([#441](https://github.com/bucketeer-io/bucketeer/issues/441)) ([86cc9e2](https://github.com/bucketeer-io/bucketeer/commit/86cc9e298d25d3f5c21bcd8054f6f68214e1bc28))
* **deps:** bump google.golang.org/grpc from 1.53.0 to 1.55.0 ([#351](https://github.com/bucketeer-io/bucketeer/issues/351)) ([a1b251a](https://github.com/bucketeer-io/bucketeer/commit/a1b251a3e47612999278c302fe1581da33bc24c9))
* **deps:** bump gopkg.in/square/go-jose.v2 from 2.4.0 to 2.6.0 ([#378](https://github.com/bucketeer-io/bucketeer/issues/378)) ([f02c684](https://github.com/bucketeer-io/bucketeer/commit/f02c68484741ccaf10611f74517ce00e77fa9628))
* **deps:** bump gopkg.in/yaml.v2 from 2.3.0 to 2.4.0 ([#350](https://github.com/bucketeer-io/bucketeer/issues/350)) ([01d4043](https://github.com/bucketeer-io/bucketeer/commit/01d40437432b9712c29b7ceee71c355a2c553795))
* **deps:** bump lewagon/wait-on-check-action from 1.0.0 to 1.3.1 ([#339](https://github.com/bucketeer-io/bucketeer/issues/339)) ([0829a20](https://github.com/bucketeer-io/bucketeer/commit/0829a20d66acbba493987fd90dc831aaac37ddb5))
* **deps:** bump multidict from 6.0.2 to 6.0.4 in /python ([#341](https://github.com/bucketeer-io/bucketeer/issues/341)) ([f8c5de8](https://github.com/bucketeer-io/bucketeer/commit/f8c5de8d0506ea991063b8512ec418793be68990))
* **deps:** bump slackapi/slack-github-action from 1.23.0 to 1.24.0 ([#440](https://github.com/bucketeer-io/bucketeer/issues/440)) ([ad4cfd0](https://github.com/bucketeer-io/bucketeer/commit/ad4cfd0d0819974edd0e67215330621b72224c09))
* modify build flow so that it doesn't wait for release workflow ([#463](https://github.com/bucketeer-io/bucketeer/issues/463)) ([5400c39](https://github.com/bucketeer-io/bucketeer/commit/5400c3992d51193447b122d0d13cdc6a09420aa9))

## [0.2.0](https://github.com/bucketeer-io/bucketeer/compare/v0.1.0...v0.2.0) (2023-01-01)


### Features

* add track api to grpc server ([#45](https://github.com/bucketeer-io/bucketeer/issues/45)) ([f7cb80b](https://github.com/bucketeer-io/bucketeer/commit/f7cb80ba506bcb6e507d0bebed1ffd21c9e98450))
* **ui:** add the menu to change the language in the dashboard ([#135](https://github.com/bucketeer-io/bucketeer/issues/135)) ([36be7b7](https://github.com/bucketeer-io/bucketeer/commit/36be7b753d4ac14bf97bcbebed935327d1d60b09))


### Bug Fixes

* error handling condition in the kafka writer ([#116](https://github.com/bucketeer-io/bucketeer/issues/116)) ([207f46a](https://github.com/bucketeer-io/bucketeer/commit/207f46a0351ff06474c747ddaf594af7bcd5d5b6))
* error handling while trying to send messages to kafka ([#115](https://github.com/bucketeer-io/bucketeer/issues/115)) ([34f616b](https://github.com/bucketeer-io/bucketeer/commit/34f616b05f042fb4157717f134a9eea71e12bcc4))
* evaluation unique count is always zero ([#127](https://github.com/bucketeer-io/bucketeer/issues/127)) ([7e1a455](https://github.com/bucketeer-io/bucketeer/commit/7e1a45529500661c1b3e0fd4ab8ee557850a260c))
* event user persister should not ack message when DB returns an error ([#84](https://github.com/bucketeer-io/bucketeer/issues/84)) ([39eb579](https://github.com/bucketeer-io/bucketeer/commit/39eb5797dfeecf50025e3c235891a499cc0f8a81))
* failed to find feature while trying to update an archived feature ([#53](https://github.com/bucketeer-io/bucketeer/issues/53)) ([e4b9e0d](https://github.com/bucketeer-io/bucketeer/commit/e4b9e0dd55aa015d0be0238a630f9f9793cfa7c9))
* flush size setting being ignored in the event persister ([#117](https://github.com/bucketeer-io/bucketeer/issues/117)) ([a19af75](https://github.com/bucketeer-io/bucketeer/commit/a19af751a2d66e942e29dca77e09b5957e9e15fb))
* internal error when there is no value in the event count ([#137](https://github.com/bucketeer-io/bucketeer/issues/137)) ([b3b5b15](https://github.com/bucketeer-io/bucketeer/commit/b3b5b15b1cb87a3713d817683c6f6ff1337be20f))
* json cannot unmarshal array while trying to create a feature flag ([#15](https://github.com/bucketeer-io/bucketeer/issues/15)) ([142b117](https://github.com/bucketeer-io/bucketeer/commit/142b11742e177f064ae9c7ab98fad5de62faf851))
* redis key expiration is not being set correctly ([#118](https://github.com/bucketeer-io/bucketeer/issues/118)) ([2cf3bfa](https://github.com/bucketeer-io/bucketeer/commit/2cf3bfad5f01e8d328b5a428b474e6937b0fce66))
* table has no partition for value from column_list error ([#144](https://github.com/bucketeer-io/bucketeer/issues/144)) ([d70dcb8](https://github.com/bucketeer-io/bucketeer/commit/d70dcb851e408340c9a296cb4524a23ee258f4eb))
* the event may duplicate in the kafka if the redis request fails ([#128](https://github.com/bucketeer-io/bucketeer/issues/128)) ([393afe7](https://github.com/bucketeer-io/bucketeer/commit/393afe730e96462ef1bf58f319b529e081c818f8))
* **ui/web-v2:** feature flag name not being validated ([#16](https://github.com/bucketeer-io/bucketeer/issues/16)) ([6118f38](https://github.com/bucketeer-io/bucketeer/commit/6118f38507dd3911e5e8493bcd5e463821fbfdfb))


### Build System

* add include_imports flag to protoc ([#57](https://github.com/bucketeer-io/bucketeer/issues/57)) ([6ab4f11](https://github.com/bucketeer-io/bucketeer/commit/6ab4f11b37ae066ab83afde35d7817592c159a94))
* add rules to build and test go files using go command ([#23](https://github.com/bucketeer-io/bucketeer/issues/23)) ([399fd6d](https://github.com/bucketeer-io/bucketeer/commit/399fd6d51432b14fb0e90aee16df91182f0a560b))
* change protoc to use external dependency files ([#25](https://github.com/bucketeer-io/bucketeer/issues/25)) ([56894fe](https://github.com/bucketeer-io/bucketeer/commit/56894fe54bc26efd93f800eb63f27e80cc4ffecb))
* fix not found error while generating proto web files ([#27](https://github.com/bucketeer-io/bucketeer/issues/27)) ([0471f3b](https://github.com/bucketeer-io/bucketeer/commit/0471f3ba2c5382919669d85017a524a2770d9b6a))
* generate proto_descriptor using protoc ([#46](https://github.com/bucketeer-io/bucketeer/issues/46)) ([a8a5f1d](https://github.com/bucketeer-io/bucketeer/commit/a8a5f1dee8526b5454c0e190e3212551ea898357))
* remove bazelisk command from Makefile ([#59](https://github.com/bucketeer-io/bucketeer/issues/59)) ([3d3495b](https://github.com/bucketeer-io/bucketeer/commit/3d3495b1dc314f434e2898b5cdbbf96e56c3d2f3))
* remove go_embed_data rule ([#19](https://github.com/bucketeer-io/bucketeer/issues/19)) ([b0efa8f](https://github.com/bucketeer-io/bucketeer/commit/b0efa8f0fcc84289d10fc094b0e1699500637fb7))
* set ubuntu-20.04 for python build runner ([#64](https://github.com/bucketeer-io/bucketeer/issues/64)) ([a1c9ea0](https://github.com/bucketeer-io/bucketeer/commit/a1c9ea047bf1b320d78618ca24c93f3055b7bf64))
* setup buildifier via bazel ([#8](https://github.com/bucketeer-io/bucketeer/issues/8)) ([ab61d14](https://github.com/bucketeer-io/bucketeer/commit/ab61d149caaa05dec992c136a239024d790ac1e2))
* update renovate settings to check once a month ([#5](https://github.com/bucketeer-io/bucketeer/issues/5)) ([01ddce4](https://github.com/bucketeer-io/bucketeer/commit/01ddce40f9f7384549cde0b0ee8abc328bc6f71e))


### Miscellaneous

* add auto ops service in the event persister envoy settings ([#103](https://github.com/bucketeer-io/bucketeer/issues/103)) ([0753c7d](https://github.com/bucketeer-io/bucketeer/commit/0753c7d343567fb7c3b2295c8902ce432c6bac37))
* add default variation id for evaluation count key ([#111](https://github.com/bucketeer-io/bucketeer/issues/111)) ([f7900d1](https://github.com/bucketeer-io/bucketeer/commit/f7900d114f005cb1b65cce40d7b6c4e26c90f752))
* add env variables for postgres ([#65](https://github.com/bucketeer-io/bucketeer/issues/65)) ([d9f403c](https://github.com/bucketeer-io/bucketeer/commit/d9f403c5f4263679f5947a79f888a6da03d9b18a))
* add experiment client in the event-persister service ([#89](https://github.com/bucketeer-io/bucketeer/issues/89)) ([e231c03](https://github.com/bucketeer-io/bucketeer/commit/e231c036b7f96bc0baa1e6b16a630b48069c49d8))
* add experiment service's envoy config in the event persister ([#80](https://github.com/bucketeer-io/bucketeer/issues/80)) ([54d8d34](https://github.com/bucketeer-io/bucketeer/commit/54d8d3491b962ec2815c887b6abb1781dc090124))
* add expiration to keys for evaluation counts ([#100](https://github.com/bucketeer-io/bucketeer/issues/100)) ([6c9920f](https://github.com/bucketeer-io/bucketeer/commit/6c9920ffeb558ca0b79a0443ff82ead74bb16155))
* add get user evaluation interface implementation ([#90](https://github.com/bucketeer-io/bucketeer/issues/90)) ([e68dcc2](https://github.com/bucketeer-io/bucketeer/commit/e68dcc28dfe98117183e66577b10568603c1ab69))
* add handling for new metrics events in the persister service ([#31](https://github.com/bucketeer-io/bucketeer/issues/31)) ([6fc3419](https://github.com/bucketeer-io/bucketeer/commit/6fc3419adcfa116d483728656d9e59c5bdc99c61))
* add json transcoding to track api for testing ([#37](https://github.com/bucketeer-io/bucketeer/issues/37)) ([876fdaf](https://github.com/bucketeer-io/bucketeer/commit/876fdaf60a4e30bdf70d35cdf0311d3b46811d07))
* add metadata property to proto client events ([#34](https://github.com/bucketeer-io/bucketeer/issues/34)) ([9cabd9f](https://github.com/bucketeer-io/bucketeer/commit/9cabd9f8d90c14af9f0bee18508ae431ce225781))
* add new sdk metrics event types to proto ([#29](https://github.com/bucketeer-io/bucketeer/issues/29)) ([5d173d5](https://github.com/bucketeer-io/bucketeer/commit/5d173d58b1a30cd735ea51f07f2389e12405b014))
* add postgresClient to persister ([#73](https://github.com/bucketeer-io/bucketeer/issues/73)) ([ff105f2](https://github.com/bucketeer-io/bucketeer/commit/ff105f28185883f9440be90888d0161a344a0787))
* add redis pipeline metrics ([#120](https://github.com/bucketeer-io/bucketeer/issues/120)) ([610e07d](https://github.com/bucketeer-io/bucketeer/commit/610e07db41e88d6e071223c45441ac1defddd89d))
* add redis settings in the event persister service ([#92](https://github.com/bucketeer-io/bucketeer/issues/92)) ([bbf62ef](https://github.com/bucketeer-io/bucketeer/commit/bbf62ef02d769a5db3601264f4b9712878d14c9b))
* add sdk version property to proto metrics events ([#32](https://github.com/bucketeer-io/bucketeer/issues/32)) ([2548847](https://github.com/bucketeer-io/bucketeer/commit/2548847f3980d2f8bde908a4ab4cb18e0af91c0c))
* add the ability to handle new metrics event in gateway ([#33](https://github.com/bucketeer-io/bucketeer/issues/33)) ([f29ab67](https://github.com/bucketeer-io/bucketeer/commit/f29ab676033d84cbaabc71de90b09e7bcd140700))
* add the metadata property to metrics event proto message ([#132](https://github.com/bucketeer-io/bucketeer/issues/132)) ([af575de](https://github.com/bucketeer-io/bucketeer/commit/af575deb21ece93700d93fd09552e05178cadfe6))
* add upsert evaluation event in the persister event service ([#88](https://github.com/bucketeer-io/bucketeer/issues/88)) ([ce1f4e0](https://github.com/bucketeer-io/bucketeer/commit/ce1f4e038fa8c6970a9c9a90a5edd15fc234711f))
* change event-counter timeout to 3 hours temporarily ([#86](https://github.com/bucketeer-io/bucketeer/issues/86)) ([c676599](https://github.com/bucketeer-io/bucketeer/commit/c676599ca08c487ff825e8bdafe70cc881018364))
* change experiment batch cronjob ([#126](https://github.com/bucketeer-io/bucketeer/issues/126)) ([9cd856a](https://github.com/bucketeer-io/bucketeer/commit/9cd856af6572b982d0eb8adfff854e3b3e8a72f7))
* change experiment updater cronjob settings ([#55](https://github.com/bucketeer-io/bucketeer/issues/55)) ([9a8a4d0](https://github.com/bucketeer-io/bucketeer/commit/9a8a4d0b3adb5ad50110d0a9a29ff6980e499588))
* change grpc track api name temporarily for testing ([#39](https://github.com/bucketeer-io/bucketeer/issues/39)) ([03c626d](https://github.com/bucketeer-io/bucketeer/commit/03c626dd960b9231bcaf7109a147ad1910f77d21))
* change mau count api in the notification sender ([#136](https://github.com/bucketeer-io/bucketeer/issues/136)) ([5ca4170](https://github.com/bucketeer-io/bucketeer/commit/5ca4170ff9fdbc4419b2ca238ee44e53a616c7d4))
* change the timezone to JP location when saving the count in redis ([#130](https://github.com/bucketeer-io/bucketeer/issues/130)) ([fd8bd2e](https://github.com/bucketeer-io/bucketeer/commit/fd8bd2ebdc966abe8ac94cac8e4caa2a9482099f))
* check for unsent events in the event persister before shutting down the service ([#123](https://github.com/bucketeer-io/bucketeer/issues/123)) ([1c0cd2c](https://github.com/bucketeer-io/bucketeer/commit/1c0cd2c3bebffd24c65bfef3cf1820e0d233c01f))
* configure delete-e2e-data's Makefile to build docker image ([#51](https://github.com/bucketeer-io/bucketeer/issues/51)) ([0aba9f3](https://github.com/bucketeer-io/bucketeer/commit/0aba9f31f4f52d4ba9aa762d6762c9649451a1eb))
* configure renovate for automerge and assigning reviewers ([#71](https://github.com/bucketeer-io/bucketeer/issues/71)) ([7a3429b](https://github.com/bucketeer-io/bucketeer/commit/7a3429b83c13d6f48482982cf87b858f34aa5cf3))
* display variation name in the variation label ([#68](https://github.com/bucketeer-io/bucketeer/issues/68)) ([8c56897](https://github.com/bucketeer-io/bucketeer/commit/8c568977d6b22c20ca916f8e61b5bb144e1c2da9))
* link goal event to the auto ops before sending it to kafka ([#104](https://github.com/bucketeer-io/bucketeer/issues/104)) ([bebc795](https://github.com/bucketeer-io/bucketeer/commit/bebc795a4ba227539f0e04a0babe94e77d27bd11))
* link the goal event to the experiment before sending it to kafka ([#101](https://github.com/bucketeer-io/bucketeer/issues/101)) ([015f326](https://github.com/bucketeer-io/bucketeer/commit/015f3268cd3f3170832eba89a39143bbae103fb5))
* remove bazel config files ([#67](https://github.com/bucketeer-io/bucketeer/issues/67)) ([efb48ea](https://github.com/bucketeer-io/bucketeer/commit/efb48ea66bd2a142a66d6735f0b78b737a44f170))
* remove duplicated environment vars ([#114](https://github.com/bucketeer-io/bucketeer/issues/114)) ([6dd9801](https://github.com/bucketeer-io/bucketeer/commit/6dd980143ef6d1d4001b76e0caffa67779584613))
* remove expiration setting from the event and user count ([#121](https://github.com/bucketeer-io/bucketeer/issues/121)) ([b18232f](https://github.com/bucketeer-io/bucketeer/commit/b18232f2fceca822bcf990a1d86dc5f1f8f26e87))
* remove postgreSQL test implementation from event persister ([#96](https://github.com/bucketeer-io/bucketeer/issues/96)) ([e9e51cd](https://github.com/bucketeer-io/bucketeer/commit/e9e51cd6f7bd92c049747330262b2cd0740ee288))
* remove unnecessary health check in the envoy egress settings ([#85](https://github.com/bucketeer-io/bucketeer/issues/85)) ([5140c11](https://github.com/bucketeer-io/bucketeer/commit/5140c11e5e8395bb27a9be0f08749897533a216a))
* remove unnecessary health checks in the envoy settings ([#87](https://github.com/bucketeer-io/bucketeer/issues/87)) ([77474c2](https://github.com/bucketeer-io/bucketeer/commit/77474c2339075db4acfca2491a36b6534885c9e5))
* remove whitespaces from the tag before upserting it ([#35](https://github.com/bucketeer-io/bucketeer/issues/35)) ([7871b97](https://github.com/bucketeer-io/bucketeer/commit/7871b972a29a707c85d295e8f9305bd4fb3834df))
* set circuit break for api-gateway ([#79](https://github.com/bucketeer-io/bucketeer/issues/79)) ([45d1363](https://github.com/bucketeer-io/bucketeer/commit/45d136301f70e7feb15d1ed1e43d637b673cfedd))
* set version using ldflags ([#48](https://github.com/bucketeer-io/bucketeer/issues/48)) ([1c9cefb](https://github.com/bucketeer-io/bucketeer/commit/1c9cefbebb02c5f96e870b9223299b7e7c06e18a))
* stop inserting events into postgres ([#76](https://github.com/bucketeer-io/bucketeer/issues/76)) ([6eea130](https://github.com/bucketeer-io/bucketeer/commit/6eea1302f1d1f0c00aae23c81725d637ccfed5e4))
* store evaluation count in redis ([#91](https://github.com/bucketeer-io/bucketeer/issues/91)) ([105b4da](https://github.com/bucketeer-io/bucketeer/commit/105b4da5b96a5baea79d2496c7d1a35a75b7f266))
* store evaluation events to postgresql ([#63](https://github.com/bucketeer-io/bucketeer/issues/63)) ([4c82b31](https://github.com/bucketeer-io/bucketeer/commit/4c82b319fef6ac219e59067ba010458a95f8bb13))
* support aws kms ([#62](https://github.com/bucketeer-io/bucketeer/issues/62)) ([77b1ae6](https://github.com/bucketeer-io/bucketeer/commit/77b1ae6515246d58852532ee3e9259b6075a8fd7))
* support sdk version in the metrics ([#54](https://github.com/bucketeer-io/bucketeer/issues/54)) ([16cb007](https://github.com/bucketeer-io/bucketeer/commit/16cb0072b9afa428ebb23d2e9b6421f487c55d41))
* **ui/web-v2:** change the local development server endpoint ([#131](https://github.com/bucketeer-io/bucketeer/issues/131)) ([d273656](https://github.com/bucketeer-io/bucketeer/commit/d273656e240a6fc6de34c6a311461eca5a97d8e3))
* update api-gateway proto descriptor value ([#43](https://github.com/bucketeer-io/bucketeer/issues/43)) ([0c2d619](https://github.com/bucketeer-io/bucketeer/commit/0c2d619e71ef522f104c2d561148d00ab025a580))
* update envoy gateway descriptor ([#42](https://github.com/bucketeer-io/bucketeer/issues/42)) ([0f95e97](https://github.com/bucketeer-io/bucketeer/commit/0f95e97dd4c74dda49e9f6d113fa49fc1c07bc58))
* update eventpersister to store mau to mysql ([#81](https://github.com/bucketeer-io/bucketeer/issues/81)) ([571cf44](https://github.com/bucketeer-io/bucketeer/commit/571cf448dfc794ca5bc2308ef1b45d1567493fc9))
* update ingress api version ([#99](https://github.com/bucketeer-io/bucketeer/issues/99)) ([a33aa7c](https://github.com/bucketeer-io/bucketeer/commit/a33aa7c34cd2a9971adeed356f504786bd4b7be2))
* update redis default settings ([#125](https://github.com/bucketeer-io/bucketeer/issues/125)) ([405e495](https://github.com/bucketeer-io/bucketeer/commit/405e495ee00700d374ff488a94035a39cd5ba442))
* update test runner image ([#38](https://github.com/bucketeer-io/bucketeer/issues/38)) ([8cd8db0](https://github.com/bucketeer-io/bucketeer/commit/8cd8db0166aa0fd2d846dbc0871cf4131e48589d))
* use redis instead of druid in GetEvaluationTimeseriesCount ([#122](https://github.com/bucketeer-io/bucketeer/issues/122)) ([517065e](https://github.com/bucketeer-io/bucketeer/commit/517065e6e6a2a799e631f687b3c585f728965ef7))

## [0.1.0](https://github.com/bucketeer-io/bucketeer/compare/v0.0.0...v0.1.0) (2022-09-28)


### Features

* add the initial implementation ([#1](https://github.com/bucketeer-io/bucketeer/issues/1)) ([038601c](https://github.com/bucketeer-io/bucketeer/commit/038601cc714b1fe66d7bf8b3763b344c89749a35))

## [0.1.0](https://github.com/bucketeer-io/bucketeer/compare/v0.0.0...v0.1.0) (2022-09-25)


### Features

* add initial implementation ([#1](https://github.com/bucketeer-io/bucketeer/issues/1)) ([2ddbb2c](https://github.com/bucketeer-io/bucketeer/commit/2ddbb2c455a99cbce30a6e6da0b3859fdcc4b919))

## [0.1.1](https://github.com/bucketeer-io/bucketeer/compare/v0.1.0...v0.1.1) (2022-09-25)


### Bug Fixes

* publish chart workflow not triggering ([5f73004](https://github.com/bucketeer-io/bucketeer/commit/5f7300484cb20ac5084960185a18b4ffe7160e1f))

## [0.1.0](https://github.com/bucketeer-io/bucketeer/compare/v0.0.0...v0.1.0) (2022-09-25)


### Features

* add initial implementation ([#1](https://github.com/bucketeer-io/bucketeer/issues/1)) ([47bdcec](https://github.com/bucketeer-io/bucketeer/commit/47bdcec22d4237fcc2b16b42198b9f1290e48ad0))
