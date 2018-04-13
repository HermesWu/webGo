    let vm = new Vue({
        el: '#app',
        directives:{
            focus(el, bindings) {
                if(bindings.value){
                    el.focus();
                }
            }
        },
        created() {
            if(this.todos) {
                //将数据存入localStorage中
                this.todos = JSON.parse(localStorage.getItem('data')) ||this.todos
            }else{
                //初始化数据
                this.getData();
            }
          //获取hash值
            console.log(window.location.hash)
            this.hash = window.location.hash.slice(2) || 'all'
            //监控hash值变化
            window.addEventListener('hashchange',()=>{
                this.hash = window.location.hash.slice(2) || 'all'
            },false)

        },
        watch: {
            todos: {
                handler() {
                    localStorage.setItem('data',JSON.stringify(this.todos))
                },deep: true
            }
        },
        computed: {
            filterTodos() {
                if(this.hash === 'all') return this.todos;
                if(this.hash === 'finish') return this.todos.filter(item => item.isSelected);
                if(this.hash === 'unfinish') return this.todos.filter(item => !item.isSelected);
                return this.todos;
            },
            num() {
                return this.todos.filter(item => !item.isSelected).length

            },

        },
        data: {
            todos: [
                {
                    isSelected: false,
                    thing: '睡觉😴'
                },
                {
                    isSelected: false,
                    thing: '吃饭'
                }
            ],
            todothing: '',
            cur:'',
            hash: 'x'
        },
        methods: {
            cancel() {
                this.cur = ''
            },
            remember(val) {
                this.cur = val;
            },
            getData() {
                axios.get('./todo.json').then((res) =>{this.todos = res.data}, (err) => {
                    console.log()
                })
            },
            add(){
                this.todos.push({isSelected:false,thing:this.todothing});
                this.todothing = ''
            },
            remove(val) {
                this.todos =this.todos.filter((item, index) => index !== val)
            }
        },

    });