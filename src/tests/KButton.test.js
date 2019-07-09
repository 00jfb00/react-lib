import React from 'react';
import KButton from '../components/atoms/KButton/KButton';
import TestRenderer from 'react-test-renderer';

describe("Button component", () => {
  it("Is the onClick method working?", async () => {
    const component = TestRenderer.create(<KButton>Funcionou</KButton>);
    const instance = component.getInstance();
    expect(instance.state.value).toBeDefined();
    expect(instance.state.value).toBe('Antes');
    expect(instance.state.children).toBeDefined();
    instance.handleClick();
    expect(instance.state.value).toBeDefined();
    expect(instance.state.value).toBe('Depois');
  });
});
