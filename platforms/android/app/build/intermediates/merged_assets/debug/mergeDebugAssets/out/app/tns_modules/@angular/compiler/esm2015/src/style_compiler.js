/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileStylesheetMetadata, identifierModuleUrl, identifierName } from './compile_metadata';
import { ViewEncapsulation } from './core';
import * as o from './output/output_ast';
import { ShadowCss } from './shadow_css';
const COMPONENT_VARIABLE = '%COMP%';
export const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
export const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
export class StylesCompileDependency {
    constructor(name, moduleUrl, setValue) {
        this.name = name;
        this.moduleUrl = moduleUrl;
        this.setValue = setValue;
    }
}
export class CompiledStylesheet {
    constructor(outputCtx, stylesVar, dependencies, isShimmed, meta) {
        this.outputCtx = outputCtx;
        this.stylesVar = stylesVar;
        this.dependencies = dependencies;
        this.isShimmed = isShimmed;
        this.meta = meta;
    }
}
export class StyleCompiler {
    constructor(_urlResolver) {
        this._urlResolver = _urlResolver;
        this._shadowCss = new ShadowCss();
    }
    compileComponent(outputCtx, comp) {
        const template = comp.template;
        return this._compileStyles(outputCtx, comp, new CompileStylesheetMetadata({
            styles: template.styles,
            styleUrls: template.styleUrls,
            moduleUrl: identifierModuleUrl(comp.type)
        }), this.needsStyleShim(comp), true);
    }
    compileStyles(outputCtx, comp, stylesheet, shim = this.needsStyleShim(comp)) {
        return this._compileStyles(outputCtx, comp, stylesheet, shim, false);
    }
    needsStyleShim(comp) {
        return comp.template.encapsulation === ViewEncapsulation.Emulated;
    }
    _compileStyles(outputCtx, comp, stylesheet, shim, isComponentStylesheet) {
        const styleExpressions = stylesheet.styles.map(plainStyle => o.literal(this._shimIfNeeded(plainStyle, shim)));
        const dependencies = [];
        stylesheet.styleUrls.forEach((styleUrl) => {
            const exprIndex = styleExpressions.length;
            // Note: This placeholder will be filled later.
            styleExpressions.push(null);
            dependencies.push(new StylesCompileDependency(getStylesVarName(null), styleUrl, (value) => styleExpressions[exprIndex] = outputCtx.importExpr(value)));
        });
        // styles variable contains plain strings and arrays of other styles arrays (recursive),
        // so we set its type to dynamic.
        const stylesVar = getStylesVarName(isComponentStylesheet ? comp : null);
        const stmt = o.variable(stylesVar)
            .set(o.literalArr(styleExpressions, new o.ArrayType(o.DYNAMIC_TYPE, [o.TypeModifier.Const])))
            .toDeclStmt(null, isComponentStylesheet ? [o.StmtModifier.Final] : [
            o.StmtModifier.Final, o.StmtModifier.Exported
        ]);
        outputCtx.statements.push(stmt);
        return new CompiledStylesheet(outputCtx, stylesVar, dependencies, shim, stylesheet);
    }
    _shimIfNeeded(style, shim) {
        return shim ? this._shadowCss.shimCssText(style, CONTENT_ATTR, HOST_ATTR) : style;
    }
}
function getStylesVarName(component) {
    let result = `styles`;
    if (component) {
        result += `_${identifierName(component.type)}`;
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21waWxlci9zcmMvc3R5bGVfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFzRCx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN2SixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBSXZDLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxXQUFXLGtCQUFrQixFQUFFLENBQUM7QUFDekQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLGNBQWMsa0JBQWtCLEVBQUUsQ0FBQztBQUUvRCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1csSUFBWSxFQUFTLFNBQWlCLEVBQVMsUUFBOEI7UUFBN0UsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUFHLENBQUM7Q0FDN0Y7QUFFRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1csU0FBd0IsRUFBUyxTQUFpQixFQUNsRCxZQUF1QyxFQUFTLFNBQWtCLEVBQ2xFLElBQStCO1FBRi9CLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2xELGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEUsU0FBSSxHQUFKLElBQUksQ0FBMkI7SUFBRyxDQUFDO0NBQy9DO0FBRUQsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0Is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QUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBYTtRQUNoRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BGLENBQUM7Q0FDRjtBQUVELFNBQVMsZ0JBQWdCLENBQUMsU0FBMEM7SUFDbEUsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3RCLElBQUksU0FBUyxFQUFFO1FBQ2IsTUFBTSxJQUFJLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEsIENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEsIGlkZW50aWZpZXJNb2R1bGVVcmwsIGlkZW50aWZpZXJOYW1lfSBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1NoYWRvd0Nzc30gZnJvbSAnLi9zaGFkb3dfY3NzJztcbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gJy4vdXJsX3Jlc29sdmVyJztcbmltcG9ydCB7T3V0cHV0Q29udGV4dH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgQ09NUE9ORU5UX1ZBUklBQkxFID0gJyVDT01QJSc7XG5leHBvcnQgY29uc3QgSE9TVF9BVFRSID0gYF9uZ2hvc3QtJHtDT01QT05FTlRfVkFSSUFCTEV9YDtcbmV4cG9ydCBjb25zdCBDT05URU5UX0FUVFIgPSBgX25nY29udGVudC0ke0NPTVBPTkVOVF9WQVJJQUJMRX1gO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVzQ29tcGlsZURlcGVuZGVuY3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBtb2R1bGVVcmw6IHN0cmluZywgcHVibGljIHNldFZhbHVlOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge31cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBpbGVkU3R5bGVzaGVldCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgcHVibGljIHN0eWxlc1Zhcjogc3RyaW5nLFxuICAgICAgcHVibGljIGRlcGVuZGVuY2llczogU3R5bGVzQ29tcGlsZURlcGVuZGVuY3lbXSwgcHVibGljIGlzU2hpbW1lZDogYm9vbGVhbixcbiAgICAgIHB1YmxpYyBtZXRhOiBDb21waWxlU3R5bGVzaGVldE1ldGFkYXRhKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU3R5bGVDb21waWxlciB7XG4gIHByaXZhdGUgX3NoYWRvd0NzczogU2hhZG93Q3NzID0gbmV3IFNoYWRvd0NzcygpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VybFJlc29sdmVyOiBVcmxSZXNvbHZlcikge31cblxuICBjb21waWxlQ29tcG9uZW50KG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgY29tcDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhKTogQ29tcGlsZWRTdHlsZXNoZWV0IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGNvbXAudGVtcGxhdGUgITtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZVN0eWxlcyhcbiAgICAgICAgb3V0cHV0Q3R4LCBjb21wLCBuZXcgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSh7XG4gICAgICAgICAgc3R5bGVzOiB0ZW1wbGF0ZS5zdHlsZXMsXG4gICAgICAgICAgc3R5bGVVcmxzOiB0ZW1wbGF0ZS5zdHlsZVVybHMsXG4gICAgICAgICAgbW9kdWxlVXJsOiBpZGVudGlmaWVyTW9kdWxlVXJsKGNvbXAudHlwZSlcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMubmVlZHNTdHlsZVNoaW0oY29tcCksIHRydWUpO1xuICB9XG5cbiAgY29tcGlsZVN0eWxlcyhcbiAgICAgIG91dHB1dEN0eDogT3V0cHV0Q29udGV4dCwgY29tcDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgc3R5bGVzaGVldDogQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSxcbiAgICAgIHNoaW06IGJvb2xlYW4gPSB0aGlzLm5lZWRzU3R5bGVTaGltKGNvbXApKTogQ29tcGlsZWRTdHlsZXNoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZVN0eWxlcyhvdXRwdXRDdHgsIGNvbXAsIHN0eWxlc2hlZXQsIHNoaW0sIGZhbHNlKTtcbiAgfVxuXG4gIG5lZWRzU3R5bGVTaGltKGNvbXA6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb21wLnRlbXBsYXRlICEuZW5jYXBzdWxhdGlvbiA9PT0gVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQ7XG4gIH1cblxuICBwcml2YXRlIF9jb21waWxlU3R5bGVzKFxuICAgICAgb3V0cHV0Q3R4OiBPdXRwdXRDb250ZXh0LCBjb21wOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gICAgICBzdHlsZXNoZWV0OiBDb21waWxlU3R5bGVzaGVldE1ldGFkYXRhLCBzaGltOiBib29sZWFuLFxuICAgICAgaXNDb21wb25lbnRTdHlsZXNoZWV0OiBib29sZWFuKTogQ29tcGlsZWRTdHlsZXNoZWV0IHtcbiAgICBjb25zdCBzdHlsZUV4cHJlc3Npb25zOiBvLkV4cHJlc3Npb25bXSA9XG4gICAgICAgIHN0eWxlc2hlZXQuc3R5bGVzLm1hcChwbGFpblN0eWxlID0+IG8ubGl0ZXJhbCh0aGlzLl9zaGltSWZOZWVkZWQocGxhaW5TdHlsZSwgc2hpbSkpKTtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXM6IFN0eWxlc0NvbXBpbGVEZXBlbmRlbmN5W10gPSBbXTtcbiAgICBzdHlsZXNoZWV0LnN0eWxlVXJscy5mb3JFYWNoKChzdHlsZVVybCkgPT4ge1xuICAgICAgY29uc3QgZXhwckluZGV4ID0gc3R5bGVFeHByZXNzaW9ucy5sZW5ndGg7XG4gICAgICAvLyBOb3RlOiBUaGlzIHBsYWNlaG9sZGVyIHdpbGwgYmUgZmlsbGVkIGxhdGVyLlxuICAgICAgc3R5bGVFeHByZXNzaW9ucy5wdXNoKG51bGwgISk7XG4gICAgICBkZXBlbmRlbmNpZXMucHVzaChuZXcgU3R5bGVzQ29tcGlsZURlcGVuZGVuY3koXG4gICAgICAgICAgZ2V0U3R5bGVzVmFyTmFtZShudWxsKSwgc3R5bGVVcmwsXG4gICAgICAgICAgKHZhbHVlKSA9PiBzdHlsZUV4cHJlc3Npb25zW2V4cHJJbmRleF0gPSBvdXRwdXRDdHguaW1wb3J0RXhwcih2YWx1ZSkpKTtcbiAgICB9KTtcbiAgICAvLyBzdHlsZXMgdmFyaWFibGUgY29udGFpbnMgcGxhaW4gc3RyaW5ncyBhbmQgYXJyYXlzIG9mIG90aGVyIHN0eWxlcyBhcnJheXMgKHJlY3Vyc2l2ZSksXG4gICAgLy8gc28gd2Ugc2V0IGl0cyB0eXBlIHRvIGR5bmFtaWMuXG4gICAgY29uc3Qgc3R5bGVzVmFyID0gZ2V0U3R5bGVzVmFyTmFtZShpc0NvbXBvbmVudFN0eWxlc2hlZXQgPyBjb21wIDogbnVsbCk7XG4gICAgY29uc3Qgc3RtdCA9IG8udmFyaWFibGUoc3R5bGVzVmFyKVxuICAgICAgICAgICAgICAgICAgICAgLnNldChvLmxpdGVyYWxBcnIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFeHByZXNzaW9ucywgbmV3IG8uQXJyYXlUeXBlKG8uRFlOQU1JQ19UWVBFLCBbby5UeXBlTW9kaWZpZXIuQ29uc3RdKSkpXG4gICAgICAgICAgICAgICAgICAgICAudG9EZWNsU3RtdChudWxsLCBpc0NvbXBvbmVudFN0eWxlc2hlZXQgPyBbby5TdG10TW9kaWZpZXIuRmluYWxdIDogW1xuICAgICAgICAgICAgICAgICAgICAgICBvLlN0bXRNb2RpZmllci5GaW5hbCwgby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgIG91dHB1dEN0eC5zdGF0ZW1lbnRzLnB1c2goc3RtdCk7XG4gICAgcmV0dXJuIG5ldyBDb21waWxlZFN0eWxlc2hlZXQob3V0cHV0Q3R4LCBzdHlsZXNWYXIsIGRlcGVuZGVuY2llcywgc2hpbSwgc3R5bGVzaGVldCk7XG4gIH1cblxuICBwcml2YXRlIF9zaGltSWZOZWVkZWQoc3R5bGU6IHN0cmluZywgc2hpbTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNoaW0gPyB0aGlzLl9zaGFkb3dDc3Muc2hpbUNzc1RleHQoc3R5bGUsIENPTlRFTlRfQVRUUiwgSE9TVF9BVFRSKSA6IHN0eWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlc1Zhck5hbWUoY29tcG9uZW50OiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEgfCBudWxsKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IGBzdHlsZXNgO1xuICBpZiAoY29tcG9uZW50KSB7XG4gICAgcmVzdWx0ICs9IGBfJHtpZGVudGlmaWVyTmFtZShjb21wb25lbnQudHlwZSl9YDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19