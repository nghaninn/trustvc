import {
  openAttestationDidIdentityProof,
  openAttestationDidSignedDocumentStatus,
  openAttestationDnsDidIdentityProof,
  openAttestationDnsTxtIdentityProof,
  openAttestationEthereumDocumentStoreStatus,
  openAttestationEthereumTokenRegistryStatus,
  openAttestationHash,
} from '@tradetrust-tt/tt-verify';
import { w3cSignatureIntegrity } from './document-integrity/w3cSignatureIntegrity';
import {
  credentialStatusTransferableRecordVerifier,
  TRANSFERABLE_RECORDS_TYPE,
} from './document-status/transferableRecords/transferableRecordVerifier';
import { w3cCredentialStatus } from './document-status/w3cCredentialStatus';
import { w3cIssuerIdentity } from './issuer-identity/w3cIssuerIdentity';

export type { TRANSFERABLE_RECORDS_TYPE };

export {
  credentialStatusTransferableRecordVerifier,
  openAttestationDidIdentityProof,
  openAttestationDidSignedDocumentStatus,
  openAttestationDnsDidIdentityProof,
  openAttestationDnsTxtIdentityProof,
  openAttestationEthereumDocumentStoreStatus,
  openAttestationEthereumTokenRegistryStatus,
  openAttestationHash,
  w3cCredentialStatus,
  w3cIssuerIdentity,
  w3cSignatureIntegrity,
};
