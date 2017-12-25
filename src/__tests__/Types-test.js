import React from 'react';
import Types from '../Types';

describe('Types', () => {
  describe('String', () => {
    it('String without arguments should return Empty Type', () => {
      expect(typeof Types.String).toEqual('function');

      const Type = Types.String();
      expect(Type).toEqual({
        value: '',
        description: '',
        type: 'string',
      });
    });
    it('String with arguments should return Type', () => {
      const Type = Types.String('custom-value', 'custom-description');
      expect(Type).toEqual({
        value: 'custom-value',
        description: 'custom-description',
        type: 'string',
      });
    });
    it('String with "false" value should return only description', () => {
      const Type = Types.String(false, 'custom-description');
      expect(Type).toEqual({
        value: '',
        description: 'custom-description',
        type: 'string',
      });
    });
    it('String with "null" value should return only description', () => {
      const Type = Types.String(null, 'custom-description');
      expect(Type).toEqual({
        value: '',
        description: 'custom-description',
        type: 'string',
      });
    });
    it('String with "null" description should return only value', () => {
      const Type = Types.String('custom-value', null);
      expect(Type).toEqual({
        value: 'custom-value',
        description: '',
        type: 'string',
      });
    });
    it('String with "false" description should return only value', () => {
      const Type = Types.String('custom-value', false);
      expect(Type).toEqual({
        value: 'custom-value',
        description: '',
        type: 'string',
      });
    });
  });


  describe('Boolean', () => {
    it('Boolean without arguments should return Empty Type', () => {
      expect(typeof Types.Boolean).toEqual('function');

      const Type = Types.Boolean();
      expect(Type).toEqual({
        value: false,
        description: '',
        type: 'boolean',
      });
    });
    it('Boolean without Boolean should return value false', () => {
      const Type = Types.Boolean('custom-value', 'custom-description');
      expect(Type).toEqual({
        value: false,
        description: 'custom-description',
        type: 'boolean',
      });
    });
    it('Boolean with true value should return value true', () => {
      const Type = Types.Boolean(true, 'custom-description');
      expect(Type).toEqual({
        value: true,
        description: 'custom-description',
        type: 'boolean',
      });
    });
    it('Boolean with "null" value should return value false', () => {
      const Type = Types.Boolean(null, 'custom-description');
      expect(Type).toEqual({
        value: false,
        description: 'custom-description',
        type: 'boolean',
      });
    });
    it('Boolean with "null" description should return description as string', () => {
      const Type = Types.Boolean('custom-value', null);
      expect(Type).toEqual({
        value: false,
        description: '',
        type: 'boolean',
      });
    });
    it('Boolean with "false" description should return only value', () => {
      const Type = Types.Boolean('custom-value', false);
      expect(Type).toEqual({
        value: false,
        description: '',
        type: 'boolean',
      });
    });
  });


  describe('Number', () => {
    it('Number without arguments should return Empty Type', () => {
      expect(typeof Types.Number).toEqual('function');

      const Type = Types.Number();
      expect(Type).toEqual({
        value: 0,
        description: '',
        type: 'number',
      });
    });
    it('Number without Number should return value', () => {
      const Type = Types.Number(10, 'custom-description');
      expect(Type).toEqual({
        value: 10,
        description: 'custom-description',
        type: 'number',
      });
    });
    it('Number with string as value should return parsed Int', () => {
      const Type = Types.Number('14', 'custom-description');
      expect(Type).toEqual({
        value: 14,
        description: 'custom-description',
        type: 'number',
      });
    });
    it('Number with unparsable string as value should return parsed Int', () => {
      const Type = Types.Number('my-name', 'custom-description');
      expect(Type).toEqual({
        value: 0,
        description: 'custom-description',
        type: 'number',
      });
    });
  });
});
