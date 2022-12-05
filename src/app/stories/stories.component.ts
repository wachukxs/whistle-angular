import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { Contract } from 'ethers';

// import contractABI from '../../assets/files/HelloWorld.json'
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../services/util.service';

const contractAddress = "0x6f3f635A9762B47954229Ea479b4541eAF402A6A";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  contractABI: any
  constructor(private http: HttpClient, private utilService: UtilService) { 

  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  helloWorldContract: any

  ngOnInit(): void {
    console.log('pro', environment);

    this.seeStories()

    // this.do()
    // .then((res) => {
    //   console.log('ress mesg', res);
    // }).catch((err) => {
    //   console.log('err msg', err);
    // })
  }

  // async do() { // : Promise<void>

  //   this.http.get('assets/json/data.json').subscribe(async (res) => {
  //     this.contractABI = res;
  //     console.log('--- result :: ',  this.contractABI);

  //     const alchemyKey = `${environment.NG_APP_ALCHEMY_API_BASE_URL}/${environment.NG_APP_MY_ALCHEMY_API_KEY}`
  //     const web3 = createAlchemyWeb3(alchemyKey);
  
  //     this.helloWorldContract = new web3.eth.Contract(
  //       this.contractABI,
  //       contractAddress
  //     );
  
  //     const message = await this.helloWorldContract.methods.message().call();
  
  //     // return message
  //     console.log('message', message);
      

  //   });



  // }

  seeStories(): void {
    this.utilService.getStories()
    .subscribe((res) => {
      console.log('res', res);

      this.utilService.showNotification("Successfully published story!")

      if (res.body && (res.body as any).data) {
        for (let index = 0; index < (res.body as any).data.length; index++) {
          const element = (res.body as any).data[index]; 
        }
      }


      
    }, (err) => {
      console.log('err', err);
      this.utilService.showNotification(err.error?.error?.reason)
      
    })
  }

}
