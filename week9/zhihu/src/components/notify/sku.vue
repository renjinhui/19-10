<template>
    <div>
        <ul>
          <li>白色</li>
          <li class='gray'>红色</li>
          <li class='current'>蓝色</li>
          <li>黑色</li>
        </ul>

        <ul>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li class='current'>XL</li>
          <li>XXL</li>
        </ul>

        <ul>
          <li>优1</li>
          <li>优2</li>
          <li class='current'>优3</li>
        </ul>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
          color:[
            {
              id:1,
              text:"白色",
              size:["S","XL","XXL"],
              brand:["benz",'bmw']
            },
            {
              id:2,
              text:"红色",
              size:["XL","XXL"],
              brand:["benz",'bmw']
            },
            {
              id:3,
              text:"蓝色",
              size:["S","XL","XXL","M","L"],
              brand:["benz"]
            },
            {
              id:4,
              text:"黑色",
              size:["L","XL","XXL"],
              brand:[]
            }
          ],
          size:[
            {
              id:'S',
              text:"S",
              
            },
            {
              id:'M',
              text:"M"
            },
            {
              id:'L',
              text:"L"
            },
            {
              id:'XL',
              text:"XL"
            },
            {
              id:'XXL',
              text:"XXL"
            },
          ],
          brand:[
            {
              id:'benz',
              text:"奔驰"
            },
            {
              id:'bmw',
              text:"宝马"
            },
          ]
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
  ul{
    overflow: hidden;
    margin: 10px auto;
    li{
      float: left;
      width: 15vw;
      text-align: center;
      height: 30px;
      line-height: 30px;
      background: rgb(128, 171, 250);
      margin: 0 5px;
      cursor: pointer;
    }
    li.current{
      background: rgb(88, 189, 189);
      color: #ffffff
    }
    li.gray{
      background: #ccc;
    }
  }
</style>