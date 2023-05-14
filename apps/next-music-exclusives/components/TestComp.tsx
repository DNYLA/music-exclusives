import React, { useState } from 'react';

export default function TestComp() {
  const [open, setOpen] = useState(false);
  return (
    <span className="ml-2 text-sm font-bold">
      {process.env.PROJECT_NAME}The App
    </span>
  );
}
