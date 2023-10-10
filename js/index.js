Vue.createApp({
    data() {
        return {
            number1: null,
            number2: null, 
            result: "",
            operation: "+"
        }
    },
    methods: {
        calculate() {
            
            this.result = this.number1 + this.number2 
            switch(this.operation) { 
                case "+": { 
                   this.result = this.number1 + this.number2 
                   break; 
                } 
                case "-": { 
                   this.result = this.number1 - this.number2 
                   break; 
                }
                case "*": { 
                    this.result = this.number1 * this.number2
                    break; 
                }
                case "/": { 
                    this.result = this.number1 / this.number2
                    break; 
                }    
                default: { 
                   //statements; 
                   break; 
                } 
             } 
        }
    }
}).mount("#app")