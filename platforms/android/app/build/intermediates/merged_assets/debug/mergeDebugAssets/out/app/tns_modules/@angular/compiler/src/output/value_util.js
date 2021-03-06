/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/output/value_util", ["require", "exports", "@angular/compiler/src/util", "@angular/compiler/src/output/output_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("@angular/compiler/src/util");
    var o = require("@angular/compiler/src/output/output_ast");
    exports.QUOTED_KEYS = '$quoted$';
    function convertValueToOutputAst(ctx, value, type) {
        if (type === void 0) { type = null; }
        return util_1.visitValue(value, new _ValueOutputAstTransformer(ctx), type);
    }
    exports.convertValueToOutputAst = convertValueToOutputAst;
    var _ValueOutputAstTransformer = /** @class */ (function () {
        function _ValueOutputAstTransformer(ctx) {
            this.ctx = ctx;
        }
        _ValueOutputAstTransformer.prototype.visitArray = function (arr, type) {
            var _this = this;
            return o.literalArr(arr.map(function (value) { return util_1.visitValue(value, _this, null); }), type);
        };
        _ValueOutputAstTransformer.prototype.visitStringMap = function (map, type) {
            var _this = this;
            var entries = [];
            var quotedSet = new Set(map && map[exports.QUOTED_KEYS]);
            Object.keys(map).forEach(function (key) {
                entries.push(new o.LiteralMapEntry(key, util_1.visitValue(map[key], _this, null), quotedSet.has(key)));
            });
            return new o.LiteralMapExpr(entries, type);
        };
        _ValueOutputAstTransformer.prototype.visitPrimitive = function (value, type) { return o.literal(value, type); };
        _ValueOutputAstTransformer.prototype.visitOther = function (value, type) {
            if (value instanceof o.Expression) {
                return value;
            }
            else {
                return this.ctx.importExpr(value);
            }
        };
        return _ValueOutputAstTransformer;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvdmFsdWVfdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILG1EQUFvRTtJQUVwRSwyREFBa0M7SUFFckIsUUFBQSxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBRXRDLFNBQWdCLHVCQUF1QixDQUNuQyxHQUFrQixFQUFFLEtBQVUsRUFBRSxJQUEwQjtRQUExQixxQkFBQSxFQUFBLFdBQTBCO1FBQzVELE9BQU8saUJBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBSEQsMERBR0M7SUFFRDtRQUNFLG9DQUFvQixHQUFrQjtZQUFsQixRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQUcsQ0FBQztRQUMxQywrQ0FBVSxHQUFWLFVBQVcsR0FBVSxFQUFFLElBQVk7WUFBbkMsaUJBRUM7WUFEQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGlCQUFVLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRSxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFFRCxtREFBYyxHQUFkLFVBQWUsR0FBeUIsRUFBRSxJQUFlO1lBQXpELGlCQVFDO1lBUEMsSUFBTSxPQUFPLEdBQXdCLEVBQUUsQ0FBQztZQUN4QyxJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLG1CQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDMUIsT0FBTyxDQUFDLElBQUksQ0FDUixJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLGlCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsbURBQWMsR0FBZCxVQUFlLEtBQVUsRUFBRSxJQUFZLElBQWtCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpGLCtDQUFVLEdBQVYsVUFBVyxLQUFVLEVBQUUsSUFBWTtZQUNqQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDO1FBQ0gsaUNBQUM7SUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7T3V0cHV0Q29udGV4dCwgVmFsdWVUcmFuc2Zvcm1lciwgdmlzaXRWYWx1ZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCAqIGFzIG8gZnJvbSAnLi9vdXRwdXRfYXN0JztcblxuZXhwb3J0IGNvbnN0IFFVT1RFRF9LRVlTID0gJyRxdW90ZWQkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZVRvT3V0cHV0QXN0KFxuICAgIGN0eDogT3V0cHV0Q29udGV4dCwgdmFsdWU6IGFueSwgdHlwZTogby5UeXBlIHwgbnVsbCA9IG51bGwpOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gdmlzaXRWYWx1ZSh2YWx1ZSwgbmV3IF9WYWx1ZU91dHB1dEFzdFRyYW5zZm9ybWVyKGN0eCksIHR5cGUpO1xufVxuXG5jbGFzcyBfVmFsdWVPdXRwdXRBc3RUcmFuc2Zvcm1lciBpbXBsZW1lbnRzIFZhbHVlVHJhbnNmb3JtZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN0eDogT3V0cHV0Q29udGV4dCkge31cbiAgdmlzaXRBcnJheShhcnI6IGFueVtdLCB0eXBlOiBvLlR5cGUpOiBvLkV4cHJlc3Npb24ge1xuICAgIHJldHVybiBvLmxpdGVyYWxBcnIoYXJyLm1hcCh2YWx1ZSA9PiB2aXNpdFZhbHVlKHZhbHVlLCB0aGlzLCBudWxsKSksIHR5cGUpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdNYXAobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgdHlwZTogby5NYXBUeXBlKTogby5FeHByZXNzaW9uIHtcbiAgICBjb25zdCBlbnRyaWVzOiBvLkxpdGVyYWxNYXBFbnRyeVtdID0gW107XG4gICAgY29uc3QgcXVvdGVkU2V0ID0gbmV3IFNldDxzdHJpbmc+KG1hcCAmJiBtYXBbUVVPVEVEX0tFWVNdKTtcbiAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGVudHJpZXMucHVzaChcbiAgICAgICAgICBuZXcgby5MaXRlcmFsTWFwRW50cnkoa2V5LCB2aXNpdFZhbHVlKG1hcFtrZXldLCB0aGlzLCBudWxsKSwgcXVvdGVkU2V0LmhhcyhrZXkpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBvLkxpdGVyYWxNYXBFeHByKGVudHJpZXMsIHR5cGUpO1xuICB9XG5cbiAgdmlzaXRQcmltaXRpdmUodmFsdWU6IGFueSwgdHlwZTogby5UeXBlKTogby5FeHByZXNzaW9uIHsgcmV0dXJuIG8ubGl0ZXJhbCh2YWx1ZSwgdHlwZSk7IH1cblxuICB2aXNpdE90aGVyKHZhbHVlOiBhbnksIHR5cGU6IG8uVHlwZSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2Ygby5FeHByZXNzaW9uKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmN0eC5pbXBvcnRFeHByKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==