import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string ="";
  img: string="";
  urlperfil: string="";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage,`imagenes/` + name )
    uploadBytes(imgRef,file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error)) 
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagenes')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        /*if(this.img == item.name){
          console.log(name)
          this.urlperfil = this.url
        }
        console.log("La URL es " + this.url);*/
      }
    })
    .catch(error => console.log(error))
  }

}
