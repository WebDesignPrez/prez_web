import React from 'react';

function FormularioBitrix() {
  const scriptHtml = '<script data-b24-form="inline/5/9zqubm" data-skip-moving="true">(function(w,d,u){var s=d.createElement(\'script\');s.async=true;s.src=u+\'?\'+(Date.now()/180000|0);var h=d.getElementsByTagName(\'script\')[0];h.parentNode.insertBefore(s,h);})(window,document,\'https://cdn.bitrix24.es/b25221909/crm/form/loader_5.js\');</script>';

  return (
    <div dangerouslySetInnerHTML={{ __html: scriptHtml }} />
  );
}

export default FormularioBitrix;