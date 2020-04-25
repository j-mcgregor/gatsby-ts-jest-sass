import React from 'react'
import renderer from 'react-test-renderer'
import Layout from './Layout'

describe('Layout', () => {
    it('should render with the Header as the first item', () => {
        const component = renderer.create(<Layout />)
        const instance = component.root

        expect(instance.findByType('header')).toBeDefined()
    })
})
