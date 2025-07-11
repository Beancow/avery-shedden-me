"use client";
import { Button, Card, Flex } from "@radix-ui/themes/components/index";
import { wrap } from "module";
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const addToMessage = (newMessage: string) => {
    setMessage((prev) => prev + "\n" + newMessage);
  };

  const funnyMessageAboutTheButtonNotWorkingYet = () => {
    const messages = [
      "This button is like a time machine, it takes you to the future where it works!.... but not today. ⏳",
      "Clicking this button is like trying to open a door that doesn't exist yet. 🫥",
      "This button is currently on vacation 🏖️, it will be back soon!",
      "This button is like a 🦄, it exists in theory but not in practice.",
      "This button is a work in progress [====   ]...... \n error 404: Functionality not found. 🛠️",
      "This button is like a promise, it will be fulfilled... eventually. 🤞",
      "This button is currently under construction 🚧, please check back later. 🗓️ ",
      "This button is like a mystery box, you never know what you'll get... except nothing it's actually nothing... yet. 🤷‍♀️",
      "This button is like a software update, it promises a lot but takes forever to arrive. ⏳",
      "This button is like a bad magician, it ultimately fails to perform its trick. 🎩✨",
      "This button is like a broken pencil, pointless. ✏️",
      "This button is like a cat, it does what it wants when it wants. 🐱",
      "This button is like a good joke, it needs timing to work... but right now, it's just not funny. 😂",
      "This button is like a secret agent, it operates in stealth mode and is currently unavailable. 🕵️‍♂️",
      "This button is like a ghost, it haunts you with its potential but remains invisible. 👻",
      "This button is like a Wi-Fi signal, it promises connection but is currently out of range. 📶",
      "This button is like a good book, it has a great story to tell, but you have to wait for the next chapter. 📖",
    ];
    if (message === "") {
      return "This button like to repeat itself, but it will get there eventually! 🐢";
    }
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        gap="2"
        m="4"
        style={{ width: "100%" }}
      >
        <h1>Donation Page</h1>
        <p>Thank you for considering a donation! Your support means a lot.</p>
        <p>
          This is my excuse to implement a payment system. <br /> I will be
          using Stripe to handle donations. If you would like to donate, <br />{" "}
          please click the button below.
        </p>
        <Button
          variant="solid"
          size="2"
          m="2"
          style={{ width: "fit-content" }}
          onClick={() => {
            addToMessage(funnyMessageAboutTheButtonNotWorkingYet());
          }}
        >
          Donate
        </Button>
      </Flex>
      {message && (
        <Flex
          direction="column"
          flexBasis="100%"
          justify="center"
          align="center"
        >
          <Card
            m="2"
            style={{
              background:
                "linear-gradient(to bottom, var(--black-a12) , var(--black-a11))",
            }}
          >
            <h3>Error:</h3>
            <code
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "monospace",
                fontSize: "14px",
                background: "none",
                maxHeight: "2rem",
                overflow: "auto",
              }}
            >
              {message}
            </code>
          </Card>
        </Flex>
      )}
    </>
  );
}
