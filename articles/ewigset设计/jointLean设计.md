## 大概流程
初始化卡片，根据每张卡片的学习状态来判断jointLearn的状态。如果有未学习的卡片，就组装一轮卡片（每轮默认有7张卡片）。

## 拆分规则
**拆分考虑因素**<br>
1.拆分速度<br>
2.拆分的随机性<br>

| strLen | subStrLen | splitCount |
| :----: | :-------: | :--------: |
|  1~6   |     1     |   strLen   |
|  7~12  |    1~4    |    4~7     |
| 13~30  |    2~5    |    4~7     |

**拆分成功条件：**<br>
1.splitCount为0。<br>
2.最后一个subStr的Len小于规定的最大Len。<br>

## 混淆规则
| strLen | mixTime |  mixPos  |
| :----: | :-----: | :------: |
|  1~5   | strLen  | strLen-1 |

混淆成功条件: mixedStr != str

## jointLearn状态
- 本轮学习中
- 一轮学习结束
- 学习全部结束

