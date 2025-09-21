import '@testing-library/jest-dom';
import 'whatwg-fetch';
/*
import { TextEncoder, TextDecoder } from 'util';

// Polyfills for MSW
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
*/

// Mock BroadcastChannel for MSW
class MockBroadcastChannel {
  constructor(public name: string) {}
  postMessage() {}
  close() {}
  addEventListener() {}
  removeEventListener() {}
}
global.BroadcastChannel = MockBroadcastChannel as any;

// Mock TransformStream for MSW
class MockTransformStream {
  readable: any;
  writable: any;
  constructor() {
    this.readable = {};
    this.writable = {};
  }
}
global.TransformStream = MockTransformStream as any;
