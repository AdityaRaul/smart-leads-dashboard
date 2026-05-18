import { Request, Response } from "express";
import Lead from "../models/Lead";

export const createLead = async (
  req: Request,
  res: Response
) => {

  try {

    console.log(req.body);

    const lead = await Lead.create(
      req.body
    );

    res.status(201).json(lead);

  } catch (error: any) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getLeads = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      page = 1,
      limit = 10,
      status,
      source,
      search,
      sort,
    } = req.query;

    let query: any = {};

    if (status) {
      query.status = status;
    }

    if (source) {
      query.source = source;
    }

    if (search) {

      query.$or = [

        {
          name: {
            $regex: search,
            $options: "i",
          },
        },

        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    let sortOption: any = {
      createdAt: -1,
    };

    if (sort === "oldest") {

      sortOption = {
        createdAt: 1,
      };
    }

    const leads = await Lead.find(query)
      .sort(sortOption)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Lead.countDocuments(query);

    res.status(200).json({
      leads,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
    });

  } catch (error: any) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateLead = async (
  req: Request,
  res: Response
) => {

  try {

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(lead);

  } catch (error: any) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteLead = async (
  req: Request,
  res: Response
) => {

  try {

    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Lead Deleted",
    });

  } catch (error: any) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};