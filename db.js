const mongoose=require('mongoose')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jayadev-2002:Chandu@123@atlascluster.tiotyjw.mongodb.net/MERN_resturant?retryWrites=true&w=majority&appName=AtlasCluster');
   console.log('database connect....')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled)
}

