import proofData from "../proofOfIdeations/ideationData";
import "../styles/proofOfIdeation.css";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
export default function ProofOfIdeation() {
  return (
    <div>
      <div className="proof-of-ideation-main-div">
        {proofData.map((proof) => (
          <div className="proof-of-ideation-data-div">
            <h2 className="proof-title">{proof.title}</h2>
            <p className="proof-desp">{proof.desp}</p>
            <div className="listing-div">
              <h2 className="proof-title-2">{proof.title2}</h2>
              {proof.documents.map((document, index) => (
                <Stack spacing={5} direction="row">
                  <Checkbox
                    className="checkbox"
                    colorScheme="red"
                    defaultChecked
                  />
                  <p className="document-p"> {document}</p>
                  {/* </Checkbox>   */}
                </Stack>
              ))}
            </div>
            <p className="proof-desp2">{proof.listDesp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
