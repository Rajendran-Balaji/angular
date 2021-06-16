/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  return 5;
}

export default [
  'kok',
  [['a', 'p'], ['AM', 'PM'], u],
  [['AM', 'PM'], u, u],
  [
    ['आ', 'सो', 'मं', 'बु', 'बि', 'शु', 'शे'],
    ['आयतार', 'सोमार', 'मंगळार', 'बुधवार', 'बिरेस्तार', 'शुक्रार', 'शेनवार'], u,
    ['आय', 'सोम', 'मंगळ', 'बुध', 'बिरे', 'शुक्र', 'शेन']
  ],
  [
    ['आ', 'सो', 'मं', 'बु', 'ब', 'शु', 'शे'],
    ['आयतार', 'सोमार', 'मंगळार', 'बुधवार', 'बिरेस्तार', 'शुक्रार', 'शेनवार'], u,
    ['आय', 'सोम', 'मंगळ', 'बुध', 'बिरे', 'शुक्र', 'शेन']
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    [
      'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलय', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर',
      'डिसेंबर'
    ],
    u
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ['जाने', 'फेब्रु', 'मार्च', 'एप्री', 'मे', 'जून', 'जुल', 'ऑग', 'सप्टें', 'ऑक्टो', 'नो', 'डिसे'],
    [
      'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलय', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर',
      'डिसेंबर'
    ]
  ],
  [['क्रिस्तपूर्व', 'क्रिस्तशखा'], u, u],
  0,
  [0, 0],
  ['d-M-yy', 'dd-MM-y', 'd MMMM y', 'EEEE d MMMM y'],
  ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
  ['{1} {0}', u, u, u],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
  'INR',
  '₹',
  'भारतीय रुपया',
  {'JPY': ['JP¥', '¥'], 'RON': ['रॉन', 'लेई'], 'USD': ['US$', '$']},
  'ltr',
  plural
];
