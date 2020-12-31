export const MixIns = {

    data(){
        return{
            a:100
        }
    },
    methods:{
        add(){
            this.a++
        }
    },
    created(){
        this.a++
        console.log(this.a);
        console.log('打印了');
        console.log('混入的生命周期！');
    }


}