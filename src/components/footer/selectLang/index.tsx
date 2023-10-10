import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './selectDemo.css';

export const SelectDemo = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="English" />

      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    
    </Select.Trigger>
    
    <Select.Portal>
      <Select.Content className="SelectContent">

        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        
        <Select.Viewport className="SelectViewport">
          <Select.Group>
    
           
            <Select.Item value="apple">
              <Select.ItemText>VietNamese</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item value="apple">
              <Select.ItemText>English</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>

          </Select.Group>

          <Select.Separator className="SelectSeparator" />

        </Select.Viewport>

        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>

      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default SelectDemo;