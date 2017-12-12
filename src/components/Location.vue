<template>
<div id="location">
    <p>
        <i class="fa fa-map-marker"></i>
        <span class="city">{{city}}</span>
    </p>
    <div class="wait" ref="wait" v-if="city == ''"></div>
</div>
</template>

<script>
export default {
    name: "location",
    data() {
        return {
            lng: '',
            lat: '',
            city: '',
            timer: ''
        }
    },

    created() {
        let self = this;
        // 百度地图API功能
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                console.log('您的位置：'+r.point.lng+','+r.point.lat);
                self.lng = r.point.lng;
                self.lat = r.point.lat;
    
                var point = new BMap.Point(r.point.lng,r.point.lat);
                var geoc = new BMap.Geocoder();    
                geoc.getLocation(point, function(rs){
                    var addComp = rs.addressComponents;
                    self.city = addComp.city;
                });        
            }
            else {
                console('failed'+this.getStatus());
            }        
        },{enableHighAccuracy: true})
    },

    mounted(){
        let r = 0;
        this.timer = setInterval(() => {
            r += 180;
            let rotate = "rotate(" + r + "deg)";
            this.$refs.wait.style.transform = rotate;
        }, 1000);
    },

    watch: {
        city() {
            clearInterval(this.timer);
        }
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#location {
    position: relative;
    width: 100%;
    height: 100%;
}

.city {
    position: relative;
    display: black;
    font-size: 0.7rem;
    color: $dark_black;
}

.wait {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 4px dotted $orange;
    border-radius: 50%;
    transition: all 1s linear;
}
</style>

