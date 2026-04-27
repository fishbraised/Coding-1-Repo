import { Component } from "react";
import {
  MemeGeneratorContainer,
  Form,
  MainTitle,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  FormSubmitButton,
  MemeContainer,
  MemeTopText,
  MemeBottomText,
} from "./styledComponents";

const fontSizesOptionsList = [
  {
    optionId: "8",
    displayText: "8",
  },
  {
    optionId: "12",
    displayText: "12",
  },
  {
    optionId: "16",
    displayText: "16",
  },
  {
    optionId: "20",
    displayText: "20",
  },
  {
    optionId: "24",
    displayText: "24",
  },
  {
    optionId: "28",
    displayText: "28",
  },
  {
    optionId: "32",
    displayText: "32",
  },
];

class MemeGenerator extends Component {
  state = {
    imageUrlInput: "",
    topTextInput: "",
    bottomTextInput: "",
    fontSizeInput: fontSizesOptionsList[0].optionId,

    imageUrl: "",
    topText: "",
    bottomText: "",
    fontSize: "",
  };

  updateimageUrlInput = (event) => {
    this.setState({ imageUrlInput: event.target.value });
  };

  updateTopTextInput = (event) => {
    this.setState({ topTextInput: event.target.value });
  };

  updateBottomTextInput = (event) => {
    this.setState({ bottomTextInput: event.target.value });
  };

  updateFontSizeInput = (event) => {
    this.setState({ fontSizeInput: event.target.value });
  };

  generateMeme = (event) => {
    event.preventDefault();

    const { imageUrlInput, topTextInput, bottomTextInput, fontSizeInput } =
      this.state;

    if (imageUrlInput && topTextInput && bottomTextInput && fontSizeInput) {
      this.setState({
        imageUrl: imageUrlInput,
        topText: topTextInput,
        bottomText: bottomTextInput,
        fontSize: fontSizeInput,
      });
    } else {
      alert("Please fill in all inputs.");
    }
  };

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,

      imageUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state;

    return (
      <MemeGeneratorContainer>
        <Form onSubmit={this.generateMeme}>
          <MainTitle>Meme Generator</MainTitle>

          <FormLabel htmlFor="imageUrlInput">Image URL</FormLabel>
          <FormInput
            type="text"
            placeholder="Enter the Image URL"
            id="imageUrlInput"
            onChange={this.updateimageUrlInput}
            value={imageUrlInput}
          />

          <FormLabel htmlFor="topTextInput">Top Text</FormLabel>
          <FormInput
            type="text"
            placeholder="Enter the Top Text"
            id="topTextInput"
            onChange={this.updateTopTextInput}
            value={topTextInput}
          />

          <FormLabel htmlFor="bottomTextInput">Bottom Text</FormLabel>
          <FormInput
            type="text"
            placeholder="Enter the Bottom Text"
            id="bottomTextInput"
            onChange={this.updateBottomTextInput}
            value={bottomTextInput}
          />

          <FormLabel htmlFor="fontSizeInput">Font Size</FormLabel>
          <FormSelect
            id="fontSizeInput"
            onChange={this.updateFontSizeInput}
            value={fontSizeInput}
          >
            {fontSizesOptionsList.map((eachObj) => (
              <FormOption key={eachObj.optionId} value={eachObj.optionId}>
                {eachObj.displayText}
              </FormOption>
            ))}
          </FormSelect>

          <FormSubmitButton type="submit">Generate</FormSubmitButton>
        </Form>

        <MemeContainer $imageUrl={imageUrl}>
          <MemeTopText $fontSize={fontSize}>{topText}</MemeTopText>
          <MemeBottomText $fontSize={fontSize}>{bottomText}</MemeBottomText>
        </MemeContainer>
      </MemeGeneratorContainer>
    );
  }
}

export default MemeGenerator;
