import React, { useState } from 'react'

import { Input, Row, Col } from 'antd'
import { camelCase, kebabCase, upperFirst, snakeCase } from '_'

export default function StringUtil() {
  const [input, setInput] = useState('myTest')
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  const setValue = val => {
    setInput(val)
    setValue1(kebabCase(val))
    setValue2(camelCase(val))
    setValue3(snakeCase(val))
    setValue4(upperFirst(camelCase(val)))
  }

  return (
    <>
      <Row gutter={[24, 16]}>
        <Col span={6}>
          <Input
            placeholder="输入"
            value={input}
            onChange={e => {
              const {
                target: { value },
              } = e
              setValue(value)
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 16]}>
        <Col span={6}>
          <Input placeholder="kebabCase" value={value1} />
        </Col>
        <Col span={6}>
          <Input placeholder="camelCase" value={value2} />
        </Col>
        <Col span={6}>
          <Input placeholder="snakeCase" value={value3} />
        </Col>
        <Col span={6}>
          <Input placeholder="pascalCase" value={value4} />
        </Col>
      </Row>
    </>
  )
}
