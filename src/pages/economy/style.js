import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    margin: 20px;
    overflow: hidden;
    width: auto;
    height: 100vh;
    border: 1px solid black;
`

export const KeyIndicatorsWrapper = styled.div`
    display: flex;
    justify-content: space-between; /* 使子容器均匀分布 */
    gap: 20px; /* 调整子容器之间的间距 */
    padding: 20px;
    border: 1px solid black;
    width: 100%; /* 使用所有可用空间 */
`

export const SideWrapper = styled.div`
    flex: 1; /* 左右两侧的 flex 值设为 1，表示它们的宽度相同 */
    padding: 15px;
    display: flex;
    flex-direction: column; 
    height: 100%;
    border: 1px solid black;


    .long-section {
        height: 61.81%;
        background-color: lightblue;
        border-bottom: 1px solid gray;
      }
    
      .short-section {
        height: 38.19%;
        border-bottom: 1px solid gray;

        display: flex;
        flex-wrap: wrap; /* 允许子元素换行 */
        .small-card-section {
            flex: 0 1 50%; /* 每个子元素占用50%的宽度 */
            height: 50%; /* 设置高度，可根据需要调整 */
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
      }
`

export const MidWrapper = styled.div`
    flex: 1.618; /* 中间部分占用宽度是左右的两倍 */
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column; 
    height: 100%;
    border: 1px solid black;
    .side-section {
        height: 27.64%;
        border-bottom: 1px solid gray;
        display: flex;
        .long-section {
            width: 61.81%;
            background-color: red;
            border-bottom: 1px solid gray;
          }
        
        .short-section {
        width: 38.19%;
        background-color: blue;
        border-bottom: 1px solid gray;
        }
      }
    
    .middle-section {
    height: 44.72%;
    border-bottom: 1px solid gray;
    }
`




// flex-grow: 1;：元素会尝试占据所有剩余空间。多个元素有相同的 flex-grow 值时，会均分多余的空间。
// flex-grow: 0;：元素不会扩展，即使有多余空间，也只保持其本身的大小。
//flex-shrink:
// 作用：决定了元素在容器空间不足时的收缩比例。
// 默认值：1（允许收缩）。
// 使用示例：
// flex-shrink: 1;：元素会根据需要收缩以适应空间不足的情况。
// flex-shrink: 0;：元素不会收缩，即使空间不足，它的尺寸也不会变小。
// flex-basis:

// 作用：定义元素的初始大小，在空间分配之前确定的基础尺寸。
// 默认值：auto，表示元素的大小由内容或定义的 width 决定。
// 使用示例：
// flex-basis: auto;：元素大小由内容、宽度或高度等属性决定。
// flex-basis: 200px;：将元素初始大小设置为 200px。


export const KeyIndicatorWrapper = styled.div`
    border: 1px solid gray;
    padding: 10px;
    /* 使子组件不受 flex 容器拉伸的影响 */
    flex-grow: 0;
    flex-shrink: 1;
`

export const ComponentsWrapper = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-between;
    width: auto;
    height: auto;
    margin: 20px;
    border: 1px solid black;
`


export const GPTWrapper = styled.div`
    flex: 1;
    width: 500px;
    height: 500px;
    margin: 20px;
    border: 1px solid black;
`
