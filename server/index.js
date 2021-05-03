const express= require('express');
const cors= require('cors');
const axios =require('axios');
const morgan= require('morgan');


const app = express();
app.use(morgan());
app.use(cors());
app.use(express.json());

const uri= "https://api.rootnet.in/covid19-in/stats/latest";

const getDailyData = async ()=>{
    const response =await axios.get(uri);
    const dailyData = response.data;
    return dailyData;
}

app.get('/',async (req, res)=>{
        const data = await getDailyData();
        res.json(data);
    }
);      


const port =process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});