import mongoose from 'mongoose';

const { Schema } = mongoose

const TankTopsSchema = new Schema({
    name : {
        type: String,
        
    },
    price : {
        type : String,
        
    },
    img: {
        type: [String],
        
    },
    description : {
        type : String
    },
    quantity : {
        type : String
    },
    variants: [
        {
            size: {
                type: String,
                
            },
            stock: {
                type: String,
                
            },
        },
    ],
    productId : {
        type : String
    }

})

export const TankTops =  mongoose.model('TankTops', TankTopsSchema)

