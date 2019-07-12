
let data=[]

const validate = (val) => {
 
            if(val.length){
                return true
            }
            else{
                return "Please enter a value"
            }
  }

const transact = (cardDetails) => {
data.push(cardDetails)
return data
};



// Export all methods
module.exports = {   
  transact,validate
};
