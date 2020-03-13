# JKO Interview Pretest

## Notice!!

Spec 與設計有衝突，故調整了登入帳密。

唯一可登入帳號密碼為`abc12345@gmail.com:c124345ksfh`。

## Validation

### Email

正常 Email、必填。

### Password

必填、不與 Email 有相同超過 6 個字元的子字串。

## Structure

### src/assets

SVG

### src/common

common utilities, regular expressions, and static data.

### src/components

React components

### src/styles

styles for color (mixin, theme, or else for future)

## Test

### src/common/utils.test.ts

Tests for longest common substring
