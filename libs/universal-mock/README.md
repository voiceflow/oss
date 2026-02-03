# Universal Mock

Universal mocking utility, based on `@golevelup/ts-jest`.

## Installation

```sh
yarn add --exact @voiceflow/universal-mock
```

## Usage

```ts
import { expect } from 'vitest';
import { createMock } from '@voiceflow/universal-mock/vitest';

class UserService {
  doThing() {}
}

const mockUserService = createMock<UserService>();

mockUserService.doThing();

expect(mockUserService.doThing).toBeCalledTimes(1);
```
