const arrayofquotes=[
    {
        'author':'Ratan Tata',
        'quote':'Ups and downs in life are very important to keep us going,because a straight line in E.C.G means we are not alive.'
    },
    {
        'author':'Sarthak Verma',
        'quote':'Due to some personal reasons I will be violently successfull at everything I do!'
    },
    {
        'author':'Elon Musk',
        'quote':'When something is important enough you do it even if the odds are not in your favour.'
    },

    {
        'author':'Satya Nadella',
        'quote':'You are not defined not just by your capabilities,but by the choices you make!'
    },
    {
        'author':'Mark Zuckerberg',
        'quote':'Do not Discount yourself,no matter what you are doing.Everyone has a unique perspective that they can bring to the world.'
    },
    {
        'author':'Azim Premji',
        'quote':'If people are not laughing at your goals,your goals are too small.'
    },
    {
        'author':'NR Narayana Murthy',
        'quote':'Progress is often equal to the difference between mind and mindset.'
    },
    {
        'author':'Bill Gates',
        'quote':'We all need people who will give us feedback that how we improve.'
    },
    {
        'author':'Shahrukh Khan',
        'quote':'Success is not a good teacher,Failure makes you humble.'
    },
    {
        
        'author':'Vikas Khanna',
        'quote':'Impossible is just an opinion,Nothing else!'

    },
    {
        
        'author':'Virat Kohli',
        'quote':'If you can stay positive in a negative situation you win!'
    },
    {

        'author':'APJ Abdul Kalam',
        'quote':'Winners are not those who never fail but those who never quit.'
        
    },
    
    {
        
        'author':'Sandeep Maheshwari',
        'quote':'Smile to Change the world,Do not let the world change your smile.'
    },
    {
        
        'author':'Sushant Singh Rajput',
        'quote':'Our Birth and Our Death We do not decide that,but how to live life We can decide that....!'
    }


];
function generateQuote(){

    const random=Number.parseInt(Math.random()*arrayofquotes.length+1);
    document.querySelector("#generateQuote").textContent=`${arrayofquotes[random].quote}`;

    document.querySelector("#Authorname").textContent=`--${arrayofquotes[random].author}`;

    
}

const time= new Date().getHours();
let greeting;
if (time<12){
    greeting="Good Morning!    Start your morning with a positive thought!!!";

}
else if(time>=12 && time<=17){
    greeting="Good Day!       Start your day with gratefullness and positive thought!!!";

}
else if(time>=17 && time<=24) {
    greeting="Good Night!     Aways end of the day with positive thought!!!";
}
document.write(greeting);