const express=require('express');
const app=express();

app.use(express.json());

const courses=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];
app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/api/courses',(req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res)=>{
    courses.find(c=>c.id===parseInt(req.param.id));
    if(!course)res.status(404).send('the course with given id is not found');
    res.send(course);
});

app.post('/api/courses', (req, res)=>{
    //console.log(req.body);  for debug
    const course={
        id: courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port=process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${port}..`));