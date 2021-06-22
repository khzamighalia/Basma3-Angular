import { Component } from '@angular/core';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  // baseURL = 'REST_API_URL_HERE'
  // addProductForm:FormGroup;
  // isSubmitted = false;
  // productList:any;

  // constructor(private _http: HttpClient,
  //   private _fb: FormBuilder) {
  //    this.addProductForm = this._fb.group({
  //      id: [0],
  //      is_active: [1],
  //    });
 
  //  }

 
  

  // get _fc() { return this.addProductForm.controls; }

  // save(){
  //   this.isSubmitted = true;
  //   if (this.addProductForm.invalid) {
  //       return;
  //   } else{
  //     let id = this.addProductForm.controls.id.value;
  //     if(!id){
  //       this._http.post(this.baseURL+'crud_products', this.addProductForm.value).subscribe(() => {
  //         alert('Created successfully');
  //         this.reset();
  //       });
  //     } else {
  //       this._http.put(this.baseURL+'crud_product/'+id, this.addProductForm.value).subscribe(() => {
  //         alert('Updated successfully');
  //         this.reset();
  //       });
  //     }
  //   }
  // }

  // reset(){
  //   this.addProductForm.reset();
  //   this.addProductForm.controls.is_active.setValue(1);
  //   this.isSubmitted = false;

  //   this.getAll();
  // }

  // getAll(){
    
  //   this._http.get(this.baseURL+'crud_products').subscribe((result) => {
  //     this.productList = result ? result['data'] : [];
  //   });
  // }

  // edit(id){
  //   if(id){
  //     const product = this.productList.find(x => x.id === id);
  //       if (!product) return;
  //       product.isReading = true;

  //     this._http.get(this.baseURL+'crud_product/'+id).subscribe((result) => {
  //       Object.keys(this.addProductForm.controls).forEach(key => {
  //         this.addProductForm.controls[key].setValue(result[key]);
  //       });
  //       product.isReading = false;
  //       alert('Edit data loaded successfully');
  //     });
  //   }
  // }

  // delete(id){
  //   var result = confirm("Want to delete?");
  //   if(id && result){
  //     const product = this.productList.find(x => x.id === id);
  //       if (!product) return;
  //       product.isDeleting = true;
        
  //     this._http.delete(this.baseURL+'crud_product/'+id).subscribe(() => {
  //       product.isReading = false;
  //       this.reset();
  //       alert('Removed successfully');
  //     });
  //   }
  // }



}
