import { Component, OnInit } from '@angular/core';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-cargamasiva',
  templateUrl: './cargamasiva.page.html',
  styleUrls: ['./cargamasiva.page.scss'],
})
export class CargamasivaPage implements OnInit {
  returnpath:string="";
  csvData:any[]=[];
  headerRow:any[]=[];
  constructor(private fileChooser: FileChooser, private filePath:FilePath, private papa:Papa) { }

  ngOnInit() {
  }

  selectFile(){
    this.fileChooser.open()
      .then(
        uri => {
          this.filePath.resolveNativePath(uri).then(
            (resolvednativepath)=>{
              this.returnpath = resolvednativepath;
              let path = resolvednativepath.substring(0, resolvednativepath.lastIndexOf('/'));
              let file = resolvednativepath.substring(resolvednativepath.lastIndexOf('/')+1, resolvednativepath.length);
              this.readCsvData(path, file);
            }
          )
        })
      .catch(e => console.log(e));
  }

  readCsvData(path,file){
    file.readAsBinaryString(path, file)
      .then(content=>{
        console.log("File-Content: "+ JSON.stringify(content));
        this.extractData(content)
      })
      .catch(err=>{
        console.log(err);
        alert(JSON.stringify(err));
      });
  }

  extractData(content){
    let csvData = content || '';

    this.papa.parse(csvData,
      {
        complete:parsedData => {
          this.headerRow=parsedData.data.splice(0,1)[0];
          this.csvData=parsedData.data;
        }
      }
    )

  }

}
