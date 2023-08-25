
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-Advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'

const optionSelectPlan = [
    {
        id:1,
        title:'Arcade',
        icon:iconArcade,
        price:{
            moth:9,
            year:90
        }
    },
    {
        id:2,
        title:'Advanced',
        icon:iconAdvanced,
        price:{
            moth:12,
            year:200
        }
    },
    {
        id:3,
        title:'Pro',
        icon:iconPro,
        price:{
            moth:15,
            year:150
        }
    }
]


const optionAddOns =  [
    {
        id:1,
        title:'Online service',
        description:'Access to multiplayer game',
        price:{
            moth:1,
            year:10
        },
        isSelected:false
    },
    {
        id:2,
        title:'Large storage',
        description:'Extra 1TB of cloud save',
        price:{
            moth:2,
            year:20
        },
        isSelected:false
    },
    {
        id:3,
        title:'Customizable Profile',
        description:'Custom theme on your profile',
        price:{
            moth:1,
            year:10
        },
        isSelected:false
    }
]



export  {optionSelectPlan,optionAddOns}