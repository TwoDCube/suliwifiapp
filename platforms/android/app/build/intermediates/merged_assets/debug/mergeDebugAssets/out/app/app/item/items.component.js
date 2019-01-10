"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var rxjs_1 = require("rxjs");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_1.interval(10000).subscribe(function () {
            fetch("http://suliwifi-2.wificloud.ahrt.hu/login.html?redirect=redirect", { "credentials": "omit", "headers": { "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "accept-language": "en-US,en;q=0.9,hu-HU;q=0.8,hu;q=0.7,de;q=0.6", "cache-control": "max-age=0", "content-type": "application/x-www-form-urlencoded", "upgrade-insecure-requests": "1" }, "referrerPolicy": "no-referrer-when-downgrade", "body": "username=KIFU+user&password=110302&err_flag=&buttonClicked=4&err_msg=&info_flag=&info_msg=&redirect_url=http%3A%2F%2Fkifu.gov.hu%2F", "method": "POST", "mode": "cors" }).then(function (e) {
                _this.update = e.status.toString();
            });
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBSWxELCtDQUE2QztBQUM3Qyw2QkFBOEI7QUFROUI7SUFJSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsZUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN0QixLQUFLLENBQUMsa0VBQWtFLEVBQUUsRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyx1RkFBdUYsRUFBQyxpQkFBaUIsRUFBQyw4Q0FBOEMsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxtQ0FBbUMsRUFBQywyQkFBMkIsRUFBQyxHQUFHLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyw0QkFBNEIsRUFBQyxNQUFNLEVBQUMscUlBQXFJLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO2dCQUMzbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBZFEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FPbUMsMEJBQVc7T0FObkMsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7aW50ZXJ2YWx9IGZyb20gXCJyeGpzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgdXBkYXRlOiBzdHJpbmc7XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpbnRlcnZhbCgxMDAwMCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL3N1bGl3aWZpLTIud2lmaWNsb3VkLmFocnQuaHUvbG9naW4uaHRtbD9yZWRpcmVjdD1yZWRpcmVjdFwiLCB7XCJjcmVkZW50aWFsc1wiOlwib21pdFwiLFwiaGVhZGVyc1wiOntcImFjY2VwdFwiOlwidGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2Uvd2VicCxpbWFnZS9hcG5nLCovKjtxPTAuOFwiLFwiYWNjZXB0LWxhbmd1YWdlXCI6XCJlbi1VUyxlbjtxPTAuOSxodS1IVTtxPTAuOCxodTtxPTAuNyxkZTtxPTAuNlwiLFwiY2FjaGUtY29udHJvbFwiOlwibWF4LWFnZT0wXCIsXCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFwidXBncmFkZS1pbnNlY3VyZS1yZXF1ZXN0c1wiOlwiMVwifSxcInJlZmVycmVyUG9saWN5XCI6XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiLFwiYm9keVwiOlwidXNlcm5hbWU9S0lGVSt1c2VyJnBhc3N3b3JkPTExMDMwMiZlcnJfZmxhZz0mYnV0dG9uQ2xpY2tlZD00JmVycl9tc2c9JmluZm9fZmxhZz0maW5mb19tc2c9JnJlZGlyZWN0X3VybD1odHRwJTNBJTJGJTJGa2lmdS5nb3YuaHUlMkZcIixcIm1ldGhvZFwiOlwiUE9TVFwiLFwibW9kZVwiOlwiY29yc1wifSkudGhlbigoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlID0gZS5zdGF0dXMudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==