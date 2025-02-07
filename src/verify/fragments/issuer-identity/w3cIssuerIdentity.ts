import { VerificationFragment, Verifier } from '@tradetrust-tt/tt-verify';
import { SignedVerifiableCredential } from '../../..';

const checkDidWebResolve = async (did: string): Promise<boolean> => {
  try {
    const { Resolver } = await import('did-resolver');
    const { getResolver: getWebDidResolver } = await import('web-did-resolver');
    const resolver = new Resolver({
      ...getWebDidResolver(),
    });

    const didDocument = await resolver.resolve(did);

    if (!didDocument || !didDocument.didDocument) {
      throw new Error(`Failed to resolve DID: ${did}`);
    }

    return true;
  } catch {
    return false;
  }
};

export const w3cIssuerIdentity: Verifier<VerificationFragment> = {
  skip: async () => {
    return {
      type: 'ISSUER_IDENTITY',
      name: 'W3CIssuerIdentity',
      reason: {
        code: 0,
        codeString: 'SKIPPED',
        message: `Document has no issuer field.`,
      },
      status: 'SKIPPED',
    };
  },

  test: (document: unknown) => {
    const doc = document as SignedVerifiableCredential;
    return Boolean(doc.issuer);
  },

  verify: async (document: unknown) => {
    const doc = document as SignedVerifiableCredential;
    if (doc.proof?.verificationMethod?.split('#')[0] !== doc.issuer) {
      return {
        type: 'ISSUER_IDENTITY',
        name: 'W3CIssuerIdentity',
        data: false,
        reason: {
          message: `Issuer and verification method do not match.`,
        },
        status: 'INVALID',
      };
    }
    const resolutionResult = await checkDidWebResolve(doc.issuer);

    if (resolutionResult) {
      return {
        type: 'ISSUER_IDENTITY',
        name: 'W3CIssuerIdentity',
        data: true,
        status: 'VALID',
      };
    } else {
      return {
        type: 'ISSUER_IDENTITY',
        name: 'W3CIssuerIdentity',
        data: false,
        reason: {
          message: `The DID cannot be resolved.`,
        },
        status: 'INVALID',
      };
    }
  },
};
