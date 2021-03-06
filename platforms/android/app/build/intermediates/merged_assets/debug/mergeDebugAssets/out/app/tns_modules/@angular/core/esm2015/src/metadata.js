/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This indirection is needed to free up Component, etc symbols in the public API
 * to be used by the decorator versions of these annotations.
 */
export { ANALYZE_FOR_ENTRY_COMPONENTS, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren } from './metadata/di';
export { Component, Directive, HostBinding, HostListener, Input, Output, Pipe } from './metadata/directives';
export { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from './metadata/ng_module';
export { ViewEncapsulation } from './metadata/view';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxFQUFDLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQXlCLGVBQWUsRUFBNEIsS0FBSyxFQUFFLFNBQVMsRUFBc0IsWUFBWSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUNqTyxPQUFPLEVBQUMsU0FBUyxFQUFzQixTQUFTLEVBQXNCLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVuSixPQUFPLEVBQUMsc0JBQXNCLEVBQW9DLGdCQUFnQixFQUFFLFFBQVEsRUFBaUIsTUFBTSxzQkFBc0IsQ0FBQztBQUMxSSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBUaGlzIGluZGlyZWN0aW9uIGlzIG5lZWRlZCB0byBmcmVlIHVwIENvbXBvbmVudCwgZXRjIHN5bWJvbHMgaW4gdGhlIHB1YmxpYyBBUElcbiAqIHRvIGJlIHVzZWQgYnkgdGhlIGRlY29yYXRvciB2ZXJzaW9ucyBvZiB0aGVzZSBhbm5vdGF0aW9ucy5cbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZSwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbn0gZnJvbSAnLi9tZXRhZGF0YS9kaSc7XG5pbXBvcnQge0NvbXBvbmVudCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBQaXBlfSBmcm9tICcuL21ldGFkYXRhL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHtEb0Jvb3RzdHJhcCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFNjaGVtYU1ldGFkYXRhfSBmcm9tICcuL21ldGFkYXRhL25nX21vZHVsZSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuL21ldGFkYXRhL3ZpZXcnO1xuXG5leHBvcnQge0FOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIEF0dHJpYnV0ZSwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGREZWNvcmF0b3IsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkcmVuRGVjb3JhdG9yLCBRdWVyeSwgVmlld0NoaWxkLCBWaWV3Q2hpbGREZWNvcmF0b3IsIFZpZXdDaGlsZHJlbiwgVmlld0NoaWxkcmVuRGVjb3JhdG9yfSBmcm9tICcuL21ldGFkYXRhL2RpJztcbmV4cG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnREZWNvcmF0b3IsIERpcmVjdGl2ZSwgRGlyZWN0aXZlRGVjb3JhdG9yLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBQaXBlfSBmcm9tICcuL21ldGFkYXRhL2RpcmVjdGl2ZXMnO1xuZXhwb3J0IHtBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICcuL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XG5leHBvcnQge0NVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIERvQm9vdHN0cmFwLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BLCBOZ01vZHVsZSwgU2NoZW1hTWV0YWRhdGF9IGZyb20gJy4vbWV0YWRhdGEvbmdfbW9kdWxlJztcbmV4cG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4vbWV0YWRhdGEvdmlldyc7XG4iXX0=