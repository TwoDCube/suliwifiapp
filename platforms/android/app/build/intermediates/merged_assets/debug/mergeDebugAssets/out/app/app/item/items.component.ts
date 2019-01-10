import { Component, OnInit } from "@angular/core";

import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { Item } from "./item";
import { ItemService } from "./item.service";
import {interval} from "rxjs";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    update: string;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        fetch("http://suliwifi-2.wificloud.ahrt.hu/login.html?redirect=redirect", {"credentials":"omit","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","accept-language":"en-US,en;q=0.9,hu-HU;q=0.8,hu;q=0.7,de;q=0.6","cache-control":"max-age=0","content-type":"application/x-www-form-urlencoded","upgrade-insecure-requests":"1"},"referrerPolicy":"no-referrer-when-downgrade","body":"username=KIFU+user&password=110302&err_flag=&buttonClicked=4&err_msg=&info_flag=&info_msg=&redirect_url=http%3A%2F%2Fkifu.gov.hu%2F","method":"POST","mode":"cors"}).then((e) => {
            this.update = e.status.toString()
        });
        interval(10000).subscribe(() => {
            fetch("http://suliwifi-2.wificloud.ahrt.hu/login.html?redirect=redirect", {"credentials":"omit","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","accept-language":"en-US,en;q=0.9,hu-HU;q=0.8,hu;q=0.7,de;q=0.6","cache-control":"max-age=0","content-type":"application/x-www-form-urlencoded","upgrade-insecure-requests":"1"},"referrerPolicy":"no-referrer-when-downgrade","body":"username=KIFU+user&password=110302&err_flag=&buttonClicked=4&err_msg=&info_flag=&info_msg=&redirect_url=http%3A%2F%2Fkifu.gov.hu%2F","method":"POST","mode":"cors"}).then((e) => {
                this.update = e.status.toString()
            });
        })
    }
}