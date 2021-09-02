function showtime()
{
    let datetime=new Date();
    let Time=datetime.toLocaleString();
    console.log(Time);

}
setTimeout(showtime,3000)
