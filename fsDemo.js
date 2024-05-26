import fs from 'fs';
import * as fspromis from 'fs/promises';
import { features } from 'process';
// for reading files 
{
    // readFile - callback
    // fs.readFile('./public/index.html','utf8' , (err,data)=>{
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("readFile - call back ____________________________________________________________");
    //     console.log(data);
    // });


    // // readFileSync()  -  Synchronous version

    // console.log("readFile - Synchronous version ____________________________________________________________");
    // const data = fs.readFileSync('./public/css/style.css' , 'utf-8');
    // console.log(data);


    // readFile() - Promise .then()
    // fspromis.readFile('./public/about.html', 'utf-8' )
    // .then((data) =>{
    //     console.log(data);
    // });

    // readFile  - async / await ;

    const readFile = async () => {
        try {
            const data = await fspromis.readFile('./public/css/style.css', 'utf-8');
            console.log(data);
        } catch (error) {
            console.log(error);

        }
    }

    readFile();
}

// for writring files 
{
    const writeFile = async () =>{
        try {
         await fspromis.writeFile('./fs/examkple_writeFile.text' , 'this is the example of writeFile , with fs/promis  modules ');
         console.log('writeing files ....');
        } catch (error) {
            
        }
    }

    
    writeFile();
}