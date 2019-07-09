import React from 'react';
import KSpinner from '../components/atoms/KSpinner/KSpinner';
import TestRenderer from 'react-test-renderer';

describe("Is the style property working?", async () => {

  it("Is it rendering backdrop?", async () => {
    const component = TestRenderer.create(<KSpinner state="primary" backdrop={true}>Funcionou</KSpinner>);
    expect(component.toJSON().props.className.split(' ').indexOf('--spinner-backdrop')).not.toBe(-1)
  });

  it("Is it not rendering backdrop?", async () => {
    const component = TestRenderer.create(<KSpinner state="primary" backdrop={false}>Funcionou</KSpinner>);
    expect(component.toJSON().props.className.split(' ').indexOf('--spinner-backdrop')).toBe(-1)
  });
});
