import { certificateRecord } from '../data/certificateData.js';

export const getCertificateVerification = (req, res) => {
  try {
    const { id } = req.params;
    if (id && id.toLowerCase() !== certificateRecord.candidate.username.toLowerCase()) {
      return res.status(404).json({
        success: false,
        message: `Certificate record for ID "${id}" was not found.`
      });
    }

    return res.status(200).json({
      success: true,
      data: certificateRecord
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while verifying certificate.",
      error: error.message
    });
  }
};
