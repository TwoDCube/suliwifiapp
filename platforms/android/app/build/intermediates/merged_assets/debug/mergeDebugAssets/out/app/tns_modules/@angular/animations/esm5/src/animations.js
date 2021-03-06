/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation package.
 */
export { AnimationBuilder, AnimationFactory } from './animation_builder';
export { AUTO_STYLE, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation } from './animation_metadata';
export { NoopAnimationPlayer } from './players/animation_player';
export * from './private_export';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuaW1hdGlvbnMvc3JjL2FuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7R0FJRztBQUNILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXZFLE9BQU8sRUFBQyxVQUFVLEVBQTRkLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JwQixPQUFPLEVBQWtCLG1CQUFtQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFaEYsY0FBYyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgYW5pbWF0aW9uIEFQSXMgb2YgdGhlIGFuaW1hdGlvbiBwYWNrYWdlLlxuICovXG5leHBvcnQge0FuaW1hdGlvbkJ1aWxkZXIsIEFuaW1hdGlvbkZhY3Rvcnl9IGZyb20gJy4vYW5pbWF0aW9uX2J1aWxkZXInO1xuZXhwb3J0IHtBbmltYXRpb25FdmVudH0gZnJvbSAnLi9hbmltYXRpb25fZXZlbnQnO1xuZXhwb3J0IHtBVVRPX1NUWUxFLCBBbmltYXRlQ2hpbGRPcHRpb25zLCBBbmltYXRlVGltaW5ncywgQW5pbWF0aW9uQW5pbWF0ZUNoaWxkTWV0YWRhdGEsIEFuaW1hdGlvbkFuaW1hdGVNZXRhZGF0YSwgQW5pbWF0aW9uQW5pbWF0ZVJlZk1ldGFkYXRhLCBBbmltYXRpb25Hcm91cE1ldGFkYXRhLCBBbmltYXRpb25LZXlmcmFtZXNTZXF1ZW5jZU1ldGFkYXRhLCBBbmltYXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uTWV0YWRhdGFUeXBlLCBBbmltYXRpb25PcHRpb25zLCBBbmltYXRpb25RdWVyeU1ldGFkYXRhLCBBbmltYXRpb25RdWVyeU9wdGlvbnMsIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLCBBbmltYXRpb25TZXF1ZW5jZU1ldGFkYXRhLCBBbmltYXRpb25TdGFnZ2VyTWV0YWRhdGEsIEFuaW1hdGlvblN0YXRlTWV0YWRhdGEsIEFuaW1hdGlvblN0eWxlTWV0YWRhdGEsIEFuaW1hdGlvblRyYW5zaXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBhbmltYXRlLCBhbmltYXRlQ2hpbGQsIGFuaW1hdGlvbiwgZ3JvdXAsIGtleWZyYW1lcywgcXVlcnksIHNlcXVlbmNlLCBzdGFnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbiwgybVTdHlsZURhdGF9IGZyb20gJy4vYW5pbWF0aW9uX21ldGFkYXRhJztcbmV4cG9ydCB7QW5pbWF0aW9uUGxheWVyLCBOb29wQW5pbWF0aW9uUGxheWVyfSBmcm9tICcuL3BsYXllcnMvYW5pbWF0aW9uX3BsYXllcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vcHJpdmF0ZV9leHBvcnQnO1xuIl19