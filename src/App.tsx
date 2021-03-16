// #region ::: IMPORT
import { FC, useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";
import settings from "./formSettings.json";
// #endregion

export const App: FC = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const onAttachToReport = (data: any) => console.log(data);

  // const onAbortRequestAssistance = () => {
  //   throw new Error("Error on send report");
  // };

  const onSubmit = () => {
    const formData = conversationalForm.getFormData(true);
    onAttachToReport(formData);
  };

  const conversationalForm = ConversationalForm.startTheConversation({
    options: {
      submitCallback: onSubmit,
      preventAutoFocus: true,
    },
    tags: settings.form,
  });

  useEffect(() => {
    if (ref && ref.current) ref.current.appendChild(conversationalForm.el);
  }, [conversationalForm]);

  return <div ref={ref}></div>;
};
